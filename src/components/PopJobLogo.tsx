import popjobLogo from "@/assets/popjob-logo.png";

interface PopJobLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizeMap = {
  sm: "h-12",
  md: "h-14",
  lg: "h-24 md:h-32",
};

const PopJobLogo = ({ className = "", size = "md", color }: PopJobLogoProps) => {
  const s = sizeMap[size];
  // If color includes "text-background" (used in dark footer), invert the logo
  const invert = color?.includes("background");

  return (
    <img
      src={popjobLogo}
      alt="PopJob"
      className={`${s} ${className} ${invert ? "brightness-0 invert" : ""}`}
      style={{ objectFit: "contain" }}
    />
  );
};

export default PopJobLogo;
