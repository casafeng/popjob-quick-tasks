import { motion } from "framer-motion";
import PopJobLogo from "@/components/PopJobLogo";
import heroCard from "@/assets/hero-card.jpg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section className="bg-background pt-6 pb-8 md:pt-8 md:pb-12 px-4">
    <div className="container mx-auto">
      <div className="mb-6">
        <PopJobLogo size="md" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl overflow-hidden"
      >
        <img
          src={heroCard}
          alt="Post it. Solve it."
          className="w-full block"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
