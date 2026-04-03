import { Briefcase } from "lucide-react";

interface PopJobLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizeMap = {
  sm: { text: "text-2xl", icon: "w-5 h-5", gap: "-mx-0.5" },
  md: { text: "text-3xl", icon: "w-7 h-7", gap: "-mx-0.5" },
  lg: { text: "text-5xl md:text-6xl", icon: "w-10 h-10 md:w-12 md:h-12", gap: "-mx-1" },
};

const PopJobLogo = ({ className = "", size = "md", color }: PopJobLogoProps) => {
  const s = sizeMap[size];
  const textColor = color || "text-foreground";

  return (
    <span className={`inline-flex items-center font-heading font-bold lowercase tracking-tight ${textColor} ${s.text} ${className}`}>
      popj
      <Briefcase className={`${s.icon} ${s.gap} ${color || "text-foreground"}`} strokeWidth={2.5} />
      b
    </span>
  );
};

export default PopJobLogo;
