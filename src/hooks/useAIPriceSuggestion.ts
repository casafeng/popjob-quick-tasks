import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface AIPriceSuggestion {
  label: string;
  price: string;
  note: string | null;
}

export function useAIPriceSuggestion(description: string, debounceMs = 800) {
  const [suggestion, setSuggestion] = useState<AIPriceSuggestion | null>(null);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const lastQueryRef = useRef("");

  useEffect(() => {
    const trimmed = description.trim();

    if (trimmed.length < 10) {
      setSuggestion(null);
      setLoading(false);
      return;
    }

    if (trimmed === lastQueryRef.current) return;

    setLoading(true);

    const timeout = setTimeout(async () => {
      // Abort previous request
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      lastQueryRef.current = trimmed;

      try {
        const { data, error } = await supabase.functions.invoke("suggest-price", {
          body: { description: trimmed },
        });

        if (controller.signal.aborted) return;

        if (error || !data?.suggestion) {
          setSuggestion(null);
        } else {
          setSuggestion(data.suggestion);
        }
      } catch {
        if (!controller.signal.aborted) {
          setSuggestion(null);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, debounceMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [description, debounceMs]);

  return { suggestion, loading };
}
