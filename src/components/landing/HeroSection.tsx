import PopJobLogo from "@/components/PopJobLogo";
import { Button } from "@/components/ui/button";
import heroArtwork from "@/assets/hero-artwork.jpg";

interface HeroSectionProps {
  onClientClick: () => void;
  onWorkerClick: () => void;
}

const HeroSection = ({ onClientClick, onWorkerClick }: HeroSectionProps) => (
  <section className="bg-background pt-6 pb-10 md:pt-8 md:pb-14">
    <div className="mx-auto max-w-[1880px] px-4 md:px-[5vw]">
      <div className="mb-6 md:mb-10">
        <PopJobLogo size="md" />
      </div>

      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mx-auto">
        <img
          src={heroArtwork}
          alt="Post it. Solve it."
          className="w-full h-auto block"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />

        {/* CTA buttons - always side by side */}
        <div className="absolute bottom-[6%] md:bottom-[12%] left-1/2 -translate-x-1/2 flex flex-row gap-2 md:gap-6 w-[95%] md:w-auto items-center justify-center">
          <Button
            size="lg"
            className="flex-1 md:flex-none md:w-auto rounded-full font-semibold text-xs md:text-lg px-3 md:px-12 h-9 md:h-14 bg-[#5170ff] text-white hover:bg-[#4060ee] border-none transition-colors whitespace-nowrap"
            onClick={onClientClick}
          >
            Trova un worker
          </Button>
          <Button
            size="lg"
            className="flex-1 md:flex-none md:w-auto rounded-full font-semibold text-xs md:text-lg px-3 md:px-12 h-9 md:h-14 bg-white text-[#5170ff] hover:bg-gray-50 border-2 border-[#5170ff] transition-colors whitespace-nowrap"
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
