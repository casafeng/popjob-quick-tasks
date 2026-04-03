import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const LeadFormWorker = () => {
  const [form, setForm] = useState({ name: "", email: "", city: "", skills: "", availability: "", pay: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Inserisci almeno nome e email.");
      return;
    }
    setSubmitted(true);
    toast.success("Candidatura inviata! Ti contatteremo presto.");
  };

  if (submitted) {
    return (
      <section id="worker-form" className="py-20">
        <div className="container mx-auto max-w-xl text-center">
          <div className="rounded-3xl border-2 border-accent bg-secondary/50 p-12">
            <h3 className="text-2xl font-heading font-bold mb-2">Perfetto! 💪</h3>
            <p className="text-muted-foreground">Sei nella lista. Ti contatteremo appena saremo live.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="worker-form" className="py-20">
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-2">Vuoi lavorare con PopJob?</h2>
          <p className="text-muted-foreground text-center mb-8">Unisciti alla community di worker e inizia a guadagnare.</p>
          <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-accent/30 bg-card p-8 space-y-4 shadow-lg">
            <Input placeholder="Nome" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="rounded-xl" />
            <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="rounded-xl" />
            <Input placeholder="Città" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className="rounded-xl" />
            <Textarea placeholder="Che lavori puoi fare?" value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))} className="rounded-xl" />
            <Input placeholder="Quando sei disponibile?" value={form.availability} onChange={e => setForm(f => ({ ...f, availability: e.target.value }))} className="rounded-xl" />
            <Textarea placeholder="Perché vuoi usare PopJob?" value={form.why} onChange={e => setForm(f => ({ ...f, why: e.target.value }))} className="rounded-xl" />
            <Button type="submit" size="lg" className="w-full rounded-full text-base font-semibold bg-accent hover:bg-accent/90">
              Candidati come worker
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadFormWorker;
