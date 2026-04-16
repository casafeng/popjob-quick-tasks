import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PopJobLogo from "@/components/PopJobLogo";
import heroCard from "@/assets/hero-card.jpg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section className="bg-background py-16 md:py-24 lg:py-28">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left column – text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-5 max-w-xl"
        >
          <PopJobLogo size="md" />

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-foreground leading-[1.1] tracking-tight">
            Aiuto locale,
            <br />
            quando serve davvero.
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Trova un worker per i tuoi piccoli lavori o guadagna nel tuo tempo libero. Oggi, vicino a te.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              size="lg"
              className="rounded-full font-semibold text-base px-8 h-12"
              onClick={onClientClick}
            >
              Trova un worker
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full font-semibold text-base px-8 h-12"
              onClick={onWorkerClick}
            >
              Lavora con noi
            </Button>
          </div>

          <p className="text-sm text-muted-foreground font-medium tracking-wide pt-1">
            ✨ Facile · Veloce · Locale
          </p>
        </motion.div>

        {/* Right column – featured visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          <div className="bg-card rounded-3xl shadow-lg overflow-hidden p-3 max-w-[520px] w-full" style={{ boxShadow: "var(--card-shadow)" }}>
            <img
              src={heroCard}
              alt="Collage di attività: pittura, fotografia, artigianato e molto altro"
              className="w-full rounded-2xl object-cover"
              width={800}
              height={450}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
