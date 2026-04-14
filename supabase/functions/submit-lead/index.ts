import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ClientLead {
  type: "client";
  name: string;
  email: string;
  phone?: string;
  city?: string;
  help?: string;
  when?: string;
  budget?: string;
}

interface WorkerLead {
  type: "worker";
  name: string;
  email: string;
  phone?: string;
  city?: string;
  skills?: string;
  availability?: string;
  pay?: string;
}

type LeadPayload = ClientLead | WorkerLead;

function validateString(val: unknown, maxLen: number): string | null {
  if (val === undefined || val === null || val === "") return null;
  if (typeof val !== "string") return null;
  return val.trim().slice(0, maxLen) || null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json() as LeadPayload;

    // Validate type
    if (!body.type || !["client", "worker"].includes(body.type)) {
      return new Response(JSON.stringify({ error: "Invalid lead type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate required fields
    const name = validateString(body.name, 200);
    const email = validateString(body.email, 255);

    if (!name) {
      return new Response(JSON.stringify({ error: "Name is required (max 200 chars)" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return new Response(JSON.stringify({ error: "A valid email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const phone = validateString(body.phone, 20);

    if (body.type === "client") {
      const { error } = await supabase.from("leads_clients").insert({
        name,
        email,
        phone,
        city: validateString(body.city, 200),
        help: validateString(body.help, 1000),
        when: validateString(body.when, 200),
        budget: validateString(body.budget, 200),
      });
      if (error) throw error;
    } else {
      const { error } = await supabase.from("leads_workers").insert({
        name,
        email,
        phone,
        city: validateString(body.city, 200),
        skills: validateString(body.skills, 1000),
        availability: validateString(body.availability, 200),
        pay: validateString(body.pay, 200),
      });
      if (error) throw error;
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("submit-lead error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
