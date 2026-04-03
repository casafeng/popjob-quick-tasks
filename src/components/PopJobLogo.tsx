import { Briefcase } from "lucide-react";

interface PopJobLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizeMap = {
  sm: { text: "text-3xl", icon: 24, wrapper: "w-7 h-7" },
  md: { text: "text-4xl", icon: 30, wrapper: "w-9 h-9" },
  lg: { text: "text-6xl md:text-7xl", icon: 52, wrapper: "w-14 h-14 md:w-16 md:h-16" },
};

const PopJobLogo = ({ className = "", size = "md", color }: PopJobLogoProps) => {
  const s = sizeMap[size];
  const textColor = color || "text-foreground";

  return (
    <span className={`inline-flex items-baseline font-heading font-black lowercase tracking-tighter ${textColor} ${s.text} ${className}`} style={{ lineHeight: 1 }}>
      <span>popj</span>
      <span className={`inline-flex items-center justify-center ${s.wrapper} relative`} style={{ marginLeft: '-0.05em', marginRight: '-0.08em', marginBottom: '-0.05em' }}>
        <Briefcase size={s.icon} className={textColor} strokeWidth={2.8} style={{ display: 'block' }} />
      </span>
      <span>b</span>
    </span>
  );
};

export default PopJobLogo;
