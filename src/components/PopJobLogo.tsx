import popjobLogo from "@/assets/popjob-logo.png";

interface PopJobLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizeMap = {
  sm: "h-14",
  md: "h-16",
  lg: "h-32 md:h-40",
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
