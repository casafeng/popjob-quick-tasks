import { motion } from "framer-motion";
import { Sparkles, Truck, Dog, ShoppingBag, Wrench, Baby } from "lucide-react";

const tasks = [
  { icon: Sparkles, label: "Pulizie" },
  { icon: Truck, label: "Aiuto trasloco" },
  { icon: Dog, label: "Dog sitting" },
  { icon: ShoppingBag, label: "Spesa / commissioni" },
  { icon: Wrench, label: "Montaggio mobili" },
  { icon: Baby, label: "Babysitting" },
];

const TaskExamplesSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Esempi di task</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        Piccoli lavori, grande impatto. Ecco alcune delle cose che puoi fare o far fare.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {tasks.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-border bg-background p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <t.icon className="w-6 h-6 text-accent" />
            </div>
            <span className="font-heading font-medium text-sm">{t.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TaskExamplesSection;
