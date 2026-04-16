import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PopJobLogo from "@/components/PopJobLogo";
import heroCollage from "@/assets/hero-collage.jpg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section className="relative overflow-hidden min-h-[92vh] flex items-center" style={{ background: "#8fdefc" }}>
    {/* Decorative swirl circles */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[40px] border-[#b5eef8] opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-[30px] border-[#b5eef8] opacity-40" />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full border-[25px] border-[#b5eef8] opacity-50" />
      <div className="absolute -bottom-32 -right-16 w-[600px] h-[600px] rounded-full border-[35px] border-[#b5eef8] opacity-40" />
    </div>

    <div className="container mx-auto relative z-10 py-12 md:py-0">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left column – text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <div>
            <PopJobLogo size="lg" color="text-foreground" />
          </div>

          <h1
            className="font-heading font-black leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
          >
            <span
              className="block"
              style={{
                color: "#ffffff",
                WebkitTextStroke: "3px #5170ff",
                paintOrder: "stroke fill",
              }}
            >
              PUBBLICALO.
            </span>
            <span
              className="block"
              style={{
                color: "#ffffff",
                WebkitTextStroke: "3px #5170ff",
                paintOrder: "stroke fill",
              }}
            >
              RISOLVILO.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-md leading-relaxed font-medium">
            Trova un worker per i tuoi piccoli lavori o guadagna nel tuo tempo libero.{" "}
            <span className="font-bold text-foreground">Oggi, vicino a te.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              size="lg"
              className="rounded-full bg-[#5170ff] text-white font-bold text-base px-8 hover:bg-[#3d5ce6] shadow-xl hover:shadow-2xl transition-all duration-300 text-lg h-14"
              onClick={onClientClick}
            >
              Trova un worker
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-[#5170ff] text-[#5170ff] font-bold text-base px-8 hover:bg-[#5170ff] hover:text-white transition-all duration-300 text-lg h-14 bg-white/80 backdrop-blur-sm"
              onClick={onWorkerClick}
            >
              Lavora con noi
            </Button>
          </div>

          <p className="text-sm text-foreground/60 font-semibold tracking-widest uppercase pt-1">
            ✨ Facile · Veloce · Locale
          </p>
        </motion.div>

        {/* Right column – collage visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex justify-center items-center"
        >
          <img
            src={heroCollage}
            alt="Collage di attività: pittura, fotografia, artigianato e molto altro"
            className="w-full max-w-[600px] rounded-3xl"
            width={1920}
            height={1080}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
