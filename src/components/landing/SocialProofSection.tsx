import { motion } from "framer-motion";
import { ShieldCheck, Star, Lock } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Profili verificati" },
  { icon: Star, label: "Recensioni" },
  { icon: Lock, label: "Pagamenti sicuri" },
];

const reviews = [
  { name: "Marco R.", text: "PopJob mi ha salvato il weekend! Ho trovato aiuto per il trasloco in 20 minuti.", rating: 5 },
  { name: "Sara L.", text: "Guadagno un extra ogni settimana facendo commissioni nel mio quartiere.", rating: 5 },
  { name: "Luca T.", text: "Finalmente un modo semplice per trovare lavoretti vicino casa.", rating: 4 },
];

const SocialProofSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">La fiducia al centro</h2>
      <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
        Stiamo costruendo una piattaforma sicura e trasparente.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-14">
        {badges.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5"
          >
            <b.icon className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">{b.label}</span>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default SocialProofSection;
