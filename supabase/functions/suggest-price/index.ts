import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { description } = await req.json();

    if (!description || typeof description !== "string" || description.trim().length < 5) {
      return new Response(JSON.stringify({ suggestion: null }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: `Sei un esperto del mercato italiano dei lavoretti e servizi alla persona. 
L'utente descriverà un'attività di cui ha bisogno. Rispondi SOLO con un JSON valido con questa struttura:
{"label": "nome breve del servizio", "priceRange": "X-Y€/ora", "note": "breve nota opzionale"}

Regole:
- I prezzi devono riflettere il mercato italiano 2024-2025 per lavoretti informali/occasionali.
- Se la descrizione è troppo vaga per stimare un prezzo, rispondi con {"label": null, "priceRange": null, "note": null}.
- Il campo "note" può includere un dettaglio utile (es. "il prezzo può salire se serve attrezzatura").
- Rispondi SOLO con il JSON, nessun altro testo.`,
          },
          {
            role: "user",
            content: description.trim().slice(0, 500),
          },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "suggest_price",
              description: "Return a price suggestion for the described task",
              parameters: {
                type: "object",
                properties: {
                  label: { type: "string", description: "Short service name in Italian" },
                  priceRange: { type: "string", description: "Price range like 12-18€/ora" },
                  note: { type: "string", description: "Optional brief note in Italian" },
                },
                required: ["label", "priceRange"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "suggest_price" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ suggestion: null, error: "rate_limited" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ suggestion: null, error: "payment_required" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      console.error("AI gateway error:", response.status, await response.text());
      return new Response(JSON.stringify({ suggestion: null }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];

    if (toolCall?.function?.arguments) {
      const parsed = JSON.parse(toolCall.function.arguments);
      if (parsed.label && parsed.priceRange) {
        return new Response(
          JSON.stringify({
            suggestion: {
              label: parsed.label,
              price: parsed.priceRange,
              note: parsed.note || null,
            },
          }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    return new Response(JSON.stringify({ suggestion: null }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("suggest-price error:", e);
    return new Response(
      JSON.stringify({ suggestion: null, error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
