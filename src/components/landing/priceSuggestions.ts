interface PriceSuggestion {
  keywords: string[];
  label: string;
  price: string;
}

const PRICE_DATA: PriceSuggestion[] = [
  { keywords: ["puliz", "pulizia", "pulizie", "pavimento", "floor", "clean", "lavare"], label: "Pulizia casa", price: "12-18€/ora" },
  { keywords: ["traslo", "trasloc", "spost", "mobil"], label: "Aiuto trasloco", price: "15-25€/ora" },
  { keywords: ["cane", "dog", "passeg", "animale", "gatto", "pet", "dog sitting", "dogsitt"], label: "Dog sitting", price: "8-15€/ora" },
  { keywords: ["spes", "commiss", "consegn", "errand"], label: "Commissioni/spesa", price: "10-15€/ora" },
  { keywords: ["montag", "ikea", "assembl", "mont"], label: "Montaggio mobili", price: "15-25€/ora" },
  { keywords: ["babysit", "bimb", "bambin", "baby", "neonat"], label: "Babysitting", price: "8-12€/ora" },
  { keywords: ["giard", "prato", "siepe", "garden", "erba"], label: "Giardinaggio", price: "12-20€/ora" },
  { keywords: ["stirar", "stir", "iron"], label: "Stiratura", price: "10-15€/ora" },
  { keywords: ["ripetiz", "lezione", "tutor", "aiuto compiti"], label: "Ripetizioni", price: "15-25€/ora" },
  { keywords: ["cuci", "cucin", "cook", "chef"], label: "Cucinare", price: "15-20€/ora" },
];

export function getPriceSuggestion(helpText: string): { label: string; price: string } | null {
  if (!helpText || helpText.trim().length < 3) return null;
  const lower = helpText.toLowerCase();
  for (const entry of PRICE_DATA) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return { label: entry.label, price: entry.price };
    }
  }
  return null;
}
