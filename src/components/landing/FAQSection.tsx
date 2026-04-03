import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Cos'è PopJob?",
    a: "PopJob è un marketplace che connette persone che hanno bisogno di aiuto per piccoli lavori locali con worker disponibili nelle vicinanze. Perfetto per task brevi e urgenti.",
  },
  {
    q: "Come funziona?",
    a: "Se hai bisogno di aiuto, pubblica una richiesta. I worker vicino a te potranno candidarsi. Scegli quello giusto, chatta e conferma il lavoro. Se sei un worker, crea il tuo profilo e accetta i task che ti interessano.",
  },
  {
    q: "Quanto costa?",
    a: "L'iscrizione è gratuita. PopJob applica una piccola commissione sul completamento di ogni task. Il prezzo lo decidi tu.",
  },
  {
    q: "Come vengono selezionati i worker?",
    a: "Ogni worker passa un processo di verifica del profilo. Le recensioni della community aiutano a mantenere un alto livello di qualità.",
  },
  {
    q: "In quali città sarà disponibile?",
    a: "Partiremo dalle principali città italiane. Iscriviti alla lista d'attesa per essere tra i primi a provare PopJob nella tua zona!",
  },
];

const FAQSection = () => (
  <section className="py-20">
    <div className="container mx-auto max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">Domande frequenti</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-6">
            <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
