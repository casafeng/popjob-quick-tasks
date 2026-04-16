import PopJobLogo from "@/components/PopJobLogo";
import heroArtwork from "@/assets/hero-artwork.jpg";

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

      <img
        src={heroArtwork}
        alt="Post it. Solve it."
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  </section>
);

export default HeroSection;
