import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="py-20 bg-foreground">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Unisciti a PopJob prima di tutti
        </h2>
        <p className="text-background/70 mb-8 max-w-lg mx-auto">
          Stiamo lanciando presto. Iscriviti ora e ottieni accesso prioritario.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="rounded-full bg-primary text-primary-foreground font-semibold text-base px-8 hover:bg-primary/90 shadow-lg"
            onClick={() => document.getElementById("client-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ho bisogno di aiuto
          </Button>
          <button
            className="h-11 rounded-full font-semibold text-base px-8 shadow-lg transition-colors"
            style={{ backgroundColor: 'white', color: '#111' }}
            onClick={() => document.getElementById("worker-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Voglio lavorare
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
