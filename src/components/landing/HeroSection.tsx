import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PopJobLogo from "@/components/PopJobLogo";
import heroIllustration from "@/assets/hero-illustration.svg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section
    className="relative overflow-hidden min-h-screen flex items-center"
    style={{ background: "var(--hero-gradient)" }}
  >
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8">
            <PopJobLogo size="lg" color="text-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight mb-4">
            Aiuto locale,<br />quando serve davvero.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-2 max-w-lg font-medium">
            Work when you want. Hire when you need.
          </p>
          <p className="text-base text-foreground/70 mb-10 max-w-lg">
            Trova un worker per i tuoi piccoli lavori o guadagna nel tuo tempo libero. Oggi, vicino a te.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              size="lg"
              className="rounded-full bg-foreground text-background font-semibold text-base px-8 hover:bg-foreground/90 shadow-lg"
              onClick={onClientClick}
            >
              Trova un worker
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-foreground text-foreground font-semibold text-base px-8 hover:bg-foreground hover:text-background"
              onClick={onWorkerClick}
            >
              Lavora con noi
            </Button>
          </div>
          <p className="text-sm text-foreground/60 font-medium tracking-wide">
            ✨ Facile · Veloce · Locale
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <img
            src={heroIllustration}
            alt="Persone che si aiutano con lavori locali"
            className="w-full max-w-[600px] rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
