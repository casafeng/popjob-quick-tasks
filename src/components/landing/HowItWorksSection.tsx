import { motion } from "framer-motion";
import { FileText, Users, MessageCircle, UserPlus, MapPinned, Wallet } from "lucide-react";

const clientSteps = [
  { icon: FileText, title: "Pubblica la tua richiesta", desc: "Descrivi cosa ti serve e quando." },
  { icon: Users, title: "Trova un worker disponibile", desc: "Sfoglia i profili dei worker vicini." },
  { icon: MessageCircle, title: "Chatta, conferma e paga", desc: "Accordati e paga in sicurezza." },
];

const workerSteps = [
  { icon: UserPlus, title: "Crea il tuo profilo", desc: "Racconta cosa sai fare e quando sei libero." },
  { icon: MapPinned, title: "Scopri lavori vicino a te", desc: "Ricevi notifiche sui task nella tua zona." },
  { icon: Wallet, title: "Accetta task e guadagna", desc: "Scegli i lavori che ti interessano e inizia." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const StepCard = ({ step, index }: { step: typeof clientSteps[0]; index: number }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
    className="flex flex-col items-center text-center"
  >
    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4 relative">
      <step.icon className="w-8 h-8 text-accent" />
      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
        {index + 1}
      </span>
    </div>
    <h4 className="font-heading font-semibold mb-1">{step.title}</h4>
    <p className="text-sm text-muted-foreground max-w-[220px]">{step.desc}</p>
  </motion.div>
);

const HowItWorksSection = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-14">Come funziona</h2>

      <div className="mb-16">
        <h3 className="text-xl font-heading font-semibold text-center mb-8 text-accent">Per chi cerca aiuto</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {clientSteps.map((s, i) => <StepCard key={i} step={s} index={i} />)}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-heading font-semibold text-center mb-8 text-accent">Per chi vuole lavorare</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {workerSteps.map((s, i) => <StepCard key={i} step={s} index={i} />)}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
