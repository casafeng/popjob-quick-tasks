import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PopJobLogo from "@/components/PopJobLogo";
import heroCard from "@/assets/hero-card.jpg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section className="bg-background pt-6 pb-8 md:pt-8 md:pb-12 px-4">
    <div className="container mx-auto">
      {/* Logo above the banner */}
      <div className="mb-6">
        <PopJobLogo size="md" />
      </div>

      {/* Single unified billboard banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl min-h-[480px] md:min-h-[520px] lg:min-h-[560px] flex items-end"
        style={{
          backgroundImage: `url(${heroCard})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content inside the banner */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
          <h1
            className="font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Aiuto locale,
            <br />
            quando serve davvero.
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-lg mb-6 leading-relaxed">
            Trova un worker per i tuoi piccoli lavori o guadagna nel tuo tempo libero. Oggi, vicino a te.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button
              size="lg"
              className="rounded-full bg-white text-foreground font-semibold text-base px-8 h-12 hover:bg-white/90 shadow-lg"
              onClick={onClientClick}
            >
              Trova un worker
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-white/20 text-white border border-white/40 font-semibold text-base px-8 h-12 hover:bg-white/30 backdrop-blur-sm"
              onClick={onWorkerClick}
            >
              Lavora con noi
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-white/60 font-medium">
            <span>✨ Facile</span>
            <span>·</span>
            <span>Veloce</span>
            <span>·</span>
            <span>Locale</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
