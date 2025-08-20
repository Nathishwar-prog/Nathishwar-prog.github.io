import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className={cn(
      "font-bold text-gradient interactive-glow cursor-pointer transition-all duration-300",
      sizeClasses[size],
      className
    )}>
      <span className="relative">
        Know<span className="text-growth">Grow</span>
        <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      </span>
    </div>
  );
};