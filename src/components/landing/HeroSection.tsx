import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PopJobLogo from "@/components/PopJobLogo";
import { ArrowRight, Zap } from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ background: "var(--hero-gradient)" }}>
    {/* Decorative blobs */}
    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
    <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

    <div className="container mx-auto relative z-10 py-16 md:py-0">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div>
            <PopJobLogo size="lg" color="text-foreground" />
          </div>

          <div className="flex items-center gap-2 w-fit rounded-full bg-foreground/10 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            Facile · Veloce · Locale
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.1] tracking-tight">
            Aiuto locale,
            <br />
            <span className="text-primary">quando serve davvero.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/75 max-w-md leading-relaxed">
            Trova un worker per i tuoi piccoli lavori o guadagna nel tuo tempo libero.{" "}
            <span className="font-semibold text-foreground/90">Oggi, vicino a te.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              size="lg"
              className="rounded-full bg-foreground text-background font-semibold text-base px-8 hover:bg-foreground/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              onClick={onClientClick}
            >
              Trova un worker
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-foreground/30 text-foreground font-semibold text-base px-8 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              onClick={onWorkerClick}
            >
              Lavora con noi
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2 text-sm text-foreground/60">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Worker disponibili ora
            </span>
            <span>·</span>
            <span>100% gratuito</span>
          </div>
        </motion.div>

        {/* Right column – hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-2xl scale-95" />
            <img
              src={heroImg}
              alt="Persone che si aiutano con lavori locali"
              width={1024}
              height={768}
              className="relative rounded-3xl shadow-2xl object-cover max-h-[540px] w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
