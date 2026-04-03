import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const LeadFormClient = () => {
  const [form, setForm] = useState({ name: "", email: "", city: "", help: "", when: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Inserisci almeno nome e email.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads_clients").insert({
      name: form.name,
      email: form.email,
      city: form.city || null,
      help: form.help || null,
      when: form.when || null,
      budget: form.budget || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Errore nell'invio. Riprova.");
      return;
    }
    setSubmitted(true);
    toast.success("Richiesta inviata! Ti contatteremo presto.");
  };

  if (submitted) {
    return (
      <section id="client-form" className="py-20 bg-card">
        <div className="container mx-auto max-w-xl text-center">
          <div className="rounded-3xl border-2 border-primary bg-secondary/50 p-12">
            <h3 className="text-2xl font-heading font-bold mb-2">Grazie! 🎉</h3>
            <p className="text-muted-foreground">Ti abbiamo inserito nella lista. Riceverai notizie presto.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="client-form" className="py-20 bg-card">
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-2">Hai bisogno di aiuto?</h2>
          <p className="text-muted-foreground text-center mb-8">Richiedi accesso anticipato e sarai tra i primi a provare PopJob.</p>
          <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-primary/30 bg-background p-8 space-y-4 shadow-lg">
            <Input placeholder="Nome" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="rounded-xl" />
            <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="rounded-xl" />
            <Input placeholder="Città" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className="rounded-xl" />
            <Textarea placeholder="Che tipo di aiuto ti serve?" value={form.help} onChange={e => setForm(f => ({ ...f, help: e.target.value }))} className="rounded-xl" />
            <Input placeholder="Quando ne hai bisogno?" value={form.when} onChange={e => setForm(f => ({ ...f, when: e.target.value }))} className="rounded-xl" />
            <Input placeholder="Quanto saresti disposto a pagare? (€)" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} className="rounded-xl" />
            <Button type="submit" size="lg" className="w-full rounded-full text-base font-semibold">
              Richiedi accesso anticipato
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadFormClient;
