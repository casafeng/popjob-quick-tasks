import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, MapPin } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Veloce", desc: "Trova aiuto in pochi minuti, non in giorni." },
  { icon: ShieldCheck, title: "Affidabile", desc: "Profili verificati e recensioni reali." },
  { icon: Clock, title: "Flessibile", desc: "Lavora quando vuoi, senza obblighi." },
  { icon: MapPin, title: "Vicino a te", desc: "Solo worker e task nella tua zona." },
];

const WhyPopJobSection = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Perché PopJob</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary mx-auto flex items-center justify-center mb-4">
              <b.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h4 className="font-heading font-semibold mb-1">{b.title}</h4>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPopJobSection;
