import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Briefcase } from "lucide-react";

interface LeadFormsSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const LeadFormsSection = ({ onClientClick, onWorkerClick }: LeadFormsSectionProps) => (
  <section className="py-20 bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Cosa stai cercando?</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Scegli il tuo ruolo e iscriviti alla lista d'attesa.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onClientClick}
            className="w-full rounded-3xl border-2 border-primary/30 bg-background p-8 shadow-lg hover:border-primary hover:shadow-xl transition-all text-left group"
          >
            <HelpCircle className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Ho bisogno di aiuto</h3>
            <p className="text-muted-foreground text-sm mb-4">Trova un worker per i tuoi piccoli lavori, velocemente.</p>
            <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:underline">
              Richiedi accesso →
            </span>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onWorkerClick}
            className="w-full rounded-3xl border-2 border-accent/30 bg-background p-8 shadow-lg hover:border-accent hover:shadow-xl transition-all text-left group"
          >
            <Briefcase className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Voglio lavorare</h3>
            <p className="text-muted-foreground text-sm mb-4">Guadagna nel tuo tempo libero con lavori vicino a te.</p>
            <span className="inline-flex items-center text-accent font-semibold text-sm group-hover:underline">
              Candidati ora →
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LeadFormsSection;
