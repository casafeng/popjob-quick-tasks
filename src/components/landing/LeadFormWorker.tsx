import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface LeadFormWorkerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadFormWorker = ({ open, onOpenChange }: LeadFormWorkerProps) => {
  const [form, setForm] = useState({ name: "", email: "", city: "", skills: "", availability: "", pay: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Inserisci almeno nome e email.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads_workers").insert({
      name: form.name,
      email: form.email,
      city: form.city || null,
      skills: form.skills || null,
      availability: form.availability || null,
      pay: form.pay || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Errore nell'invio. Riprova.");
      return;
    }
    setSubmitted(true);
    toast.success("Candidatura inviata! Ti contatteremo presto.");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-heading font-bold mb-2">Perfetto! 💪</h3>
            <p className="text-muted-foreground">Sei nella lista. Ti contatteremo appena saremo live.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">Vuoi lavorare con PopJob?</DialogTitle>
              <DialogDescription>Unisciti alla community di worker e inizia a guadagnare.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <Input placeholder="Nome" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="rounded-xl" />
              <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="rounded-xl" />
              <Input placeholder="Città" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} className="rounded-xl" />
              <Textarea placeholder="Che lavori puoi fare?" value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))} className="rounded-xl" />
              <Input placeholder="Quando sei disponibile?" value={form.availability} onChange={e => setForm(f => ({ ...f, availability: e.target.value }))} className="rounded-xl" />
              <Input placeholder="Quanto vorresti essere pagato? (€/ora)" value={form.pay} onChange={e => setForm(f => ({ ...f, pay: e.target.value }))} className="rounded-xl" />
              <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full text-base font-semibold bg-accent hover:bg-accent/90">
                {loading ? "Invio in corso..." : "Candidati come worker"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormWorker;
