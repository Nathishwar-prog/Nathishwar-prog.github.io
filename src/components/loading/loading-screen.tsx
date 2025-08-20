import { useAuth } from "@/hooks/use-auth";
import { Logo } from "@/components/ui/logo";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing AI Environment...");

  const loadingSteps = [
    "Initializing AI Environment...",
    "Loading Learning Models...",
    "Personalizing Experience...",
    "Preparing Dashboard...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + Math.random() * 15;
        
        // Update loading text based on progress
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        if (stepIndex < loadingSteps.length) {
          setLoadingText(loadingSteps[stepIndex]);
        }
        
        return Math.min(newProgress, 95);
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center space-y-8 max-w-md w-full px-4">
        {/* Animated Logo */}
        <div className="relative">
          <Logo size="lg" className="animate-glow-pulse" />
          <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white/90">
            {loadingText}
          </h2>
          <p className="text-white/70 text-sm">
            Please wait while we set up your personalized learning environment
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Progress value={progress} className="h-2 bg-white/20" />
          <p className="text-white/60 text-xs">
            {Math.round(progress)}% Complete
          </p>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white/35 rounded-full animate-bounce delay-700"></div>
        </div>
      </div>
    </div>
  );
};