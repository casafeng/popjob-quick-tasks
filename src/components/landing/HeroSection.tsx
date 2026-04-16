import PopJobLogo from "@/components/PopJobLogo";
import { Button } from "@/components/ui/button";
import heroArtwork from "@/assets/hero-artwork.jpg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section className="bg-background pt-6 pb-8 md:pt-8 md:pb-12 px-3 md:px-4">
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-6">
        <PopJobLogo size="md" />
      </div>

      <div className="relative rounded-3xl overflow-hidden">
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

        {/* CTA buttons positioned inside the banner, lower-center area */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 flex gap-3">
          <Button
            size="lg"
            className="rounded-full font-semibold text-base px-8 h-12 bg-[#5170ff] text-white hover:bg-[#3d5ce6] border-none"
            onClick={onClientClick}
          >
            Trova un worker
          </Button>
          <Button
            size="lg"
            className="rounded-full font-semibold text-base px-8 h-12 bg-white text-[#5170ff] hover:bg-white/90 border-2 border-[#5170ff]"
            onClick={onWorkerClick}
          >
            Lavora con noi
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
