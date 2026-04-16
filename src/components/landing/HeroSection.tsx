import PopJobLogo from "@/components/PopJobLogo";
import { Button } from "@/components/ui/button";
import heroArtwork from "@/assets/hero-artwork.jpg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section className="bg-background pt-6 pb-10 md:pt-8 md:pb-14">
    <div className="mx-auto max-w-[1880px]" style={{ padding: "0 5vw" }}>
      <div className="mb-8 md:mb-10">
        <PopJobLogo size="md" />
      </div>

      <div className="relative rounded-3xl overflow-hidden mx-auto">
        <img
          src={heroArtwork}
          alt="Post it. Solve it."
          className="w-full h-auto block"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />

        {/* CTA buttons inside the banner */}
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex gap-6">
          <Button
            size="lg"
            className="rounded-full font-semibold text-lg px-12 h-14 bg-[#5170ff] text-white hover:bg-[#4060ee] border-none transition-colors"
            onClick={onClientClick}
          >
            Trova un worker
          </Button>
          <Button
            size="lg"
            className="rounded-full font-semibold text-lg px-12 h-14 bg-white text-[#5170ff] hover:bg-gray-50 border-2 border-[#5170ff] transition-colors"
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
