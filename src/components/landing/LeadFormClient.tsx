import { useState, useMemo } from "react";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { CalendarIcon, Lightbulb, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ITALIAN_PROVINCES } from "./italianProvinces";
import { useAIPriceSuggestion } from "@/hooks/useAIPriceSuggestion";

interface LeadFormClientProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HOURS = Array.from({ length: 14 }, (_, i) => {
  const h = i + 7; // 07:00 to 20:00
  return `${h.toString().padStart(2, "0")}:00`;
});

const LeadFormClient = ({ open, onOpenChange }: LeadFormClientProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    help: "",
    budget: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedHour, setSelectedHour] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { suggestion: priceSuggestion, loading: priceLoading } = useAIPriceSuggestion(form.help);

  const whenValue = useMemo(() => {
    if (!selectedDate) return "";
    let val = format(selectedDate, "d MMMM yyyy", { locale: it });
    if (selectedHour) val += ` alle ${selectedHour}`;
    return val;
  }, [selectedDate, selectedHour]);

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
        city: form.city || undefined,
        help: form.help.trim() || undefined,
        when: whenValue || undefined,
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
              <Input
                placeholder="Nome"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                maxLength={200}
                className="rounded-xl"
              />
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                maxLength={255}
                className="rounded-xl"
              />

              {/* Provincia dropdown */}
              <Select value={form.city} onValueChange={val => setForm(f => ({ ...f, city: val }))}>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Provincia" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {ITALIAN_PROVINCES.map(p => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Che tipo di aiuto ti serve?"
                value={form.help}
                onChange={e => setForm(f => ({ ...f, help: e.target.value }))}
                maxLength={1000}
                className="rounded-xl"
              />

              {/* Date + Hour picker */}
              <div className="flex gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      type="button"
                      className={cn(
                        "flex-1 justify-start text-left font-normal rounded-xl",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "d MMM yyyy", { locale: it }) : "Quando?"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={date => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>

                <Select value={selectedHour} onValueChange={setSelectedHour}>
                  <SelectTrigger className="w-[120px] rounded-xl">
                    <SelectValue placeholder="Ora" />
                  </SelectTrigger>
                  <SelectContent>
                    {HOURS.map(h => (
                      <SelectItem key={h} value={h}>{h}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget with price suggestion */}
              <div className="space-y-1.5">
                <Input
                  placeholder="Quanto saresti disposto a pagare? (€)"
                  value={form.budget}
                  onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                  maxLength={200}
                  className="rounded-xl"
                />
                {priceLoading && form.help.trim().length >= 10 && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                    <Loader2 className="h-3.5 w-3.5 text-primary shrink-0 animate-spin" />
                    <span>Analizzo la tua richiesta...</span>
                  </div>
                )}
                {!priceLoading && priceSuggestion && (
                  <div className="flex items-start gap-1.5 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                    <Lightbulb className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>{priceSuggestion.label}</strong>: solitamente {priceSuggestion.price}
                      {priceSuggestion.note && <span className="block mt-0.5 text-muted-foreground/80">{priceSuggestion.note}</span>}
                    </span>
                  </div>
                )}
              </div>

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
