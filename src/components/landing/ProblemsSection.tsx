import { motion } from "framer-motion";
import { AlertCircle, MapPin, Search } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Difficile trovare aiuto all'ultimo minuto",
    desc: "Hai bisogno di qualcuno oggi, ma non sai a chi rivolgerti. Amici occupati, agenzie troppo lente.",
  },
  {
    icon: MapPin,
    title: "Tempo libero ma nessuna opportunità",
    desc: "Vorresti guadagnare qualcosa nel weekend, ma non sai dove trovare lavori brevi vicino a te.",
  },
  {
    icon: Search,
    title: "Domanda e offerta non si incontrano",
    desc: "Non esiste un posto semplice e veloce dove chi cerca aiuto e chi lo offre possano trovarsi.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const ProblemsSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Il problema</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Trovare aiuto per piccoli lavori non dovrebbe essere complicato.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-2xl border border-border p-8 text-center"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary mb-5">
              <p.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
