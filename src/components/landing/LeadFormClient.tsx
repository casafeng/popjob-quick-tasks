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

interface LeadFormClientProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadFormClient = ({ open, onOpenChange }: LeadFormClientProps) => {
  const [form, setForm] = useState({ name: "", email: "", city: "", help: "", when: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Inserisci almeno nome e email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      toast.error("Inserisci un'email valida.");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("submit-lead", {
      body: {
        type: "client",
        name: form.name.trim(),
        email: form.email.trim(),
        city: form.city.trim() || undefined,
        help: form.help.trim() || undefined,
        when: form.when.trim() || undefined,
        budget: form.budget.trim() || undefined,
      },
    });
    setLoading(false);
    if (error || (data && data.error)) {
      toast.error("Errore nell'invio. Riprova.");
      return;
    }
    setSubmitted(true);
    toast.success("Richiesta inviata! Ti contatteremo presto.");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-heading font-bold mb-2">Grazie! 🎉</h3>
            <p className="text-muted-foreground">Ti abbiamo inserito nella lista. Riceverai notizie presto.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">Hai bisogno di aiuto?</DialogTitle>
              <DialogDescription>Richiedi accesso anticipato e sarai tra i primi a provare PopJob.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <Input placeholder="Nome" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} maxLength={200} className="rounded-xl" />
              <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} maxLength={255} className="rounded-xl" />
              <Input placeholder="Città" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} maxLength={200} className="rounded-xl" />
              <Textarea placeholder="Che tipo di aiuto ti serve?" value={form.help} onChange={e => setForm(f => ({ ...f, help: e.target.value }))} maxLength={1000} className="rounded-xl" />
              <Input placeholder="Quando ne hai bisogno?" value={form.when} onChange={e => setForm(f => ({ ...f, when: e.target.value }))} maxLength={200} className="rounded-xl" />
              <Input placeholder="Quanto saresti disposto a pagare? (€)" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} maxLength={200} className="rounded-xl" />
              <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full text-base font-semibold">
                {loading ? "Invio in corso..." : "Richiedi accesso anticipato"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormClient;
