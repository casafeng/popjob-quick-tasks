import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden py-20 md:py-32" style={{ background: "var(--hero-gradient)" }}>
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="h-8 w-8 text-primary-foreground" />
            <span className="text-2xl font-heading font-bold text-primary-foreground">PopJob</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
            Aiuto locale,<br />quando serve davvero.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-2 max-w-lg">
            Work when you want. Hire when you need.
          </p>
          <p className="text-base text-primary-foreground/80 mb-8 max-w-lg">
            Trova un worker per i tuoi piccoli lavori o guadagna nel tuo tempo libero. Oggi, vicino a te.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              size="lg"
              className="rounded-full bg-card text-accent font-semibold text-base px-8 hover:bg-card/90 shadow-lg"
              onClick={() => document.getElementById("client-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Trova un worker
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-primary-foreground text-primary-foreground font-semibold text-base px-8 hover:bg-primary-foreground/10"
              onClick={() => document.getElementById("worker-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Lavora con noi
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 font-medium tracking-wide">
            ✨ Facile · Veloce · Locale
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block"
        >
          <img src={heroImg} alt="Persone che si aiutano con lavori locali" width={1024} height={768} className="rounded-3xl shadow-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
