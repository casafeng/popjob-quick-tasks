import popjobLogo from "@/assets/popjob-logo.png";

interface PopJobLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizeMap = {
  sm: "h-8",
  md: "h-10",
  lg: "h-16 md:h-20",
};

const PopJobLogo = ({ className = "", size = "md", color }: PopJobLogoProps) => {
  const s = sizeMap[size];
  // If color includes "text-background" (used in dark footer), invert the logo
  const invert = color?.includes("background");

  return (
    <img
      src={popjobLogo}
      alt="PopJob"
      className={`${s} ${className} ${invert ? "invert" : ""}`}
      style={{ objectFit: "contain" }}
    />
  );
};

export default PopJobLogo;
