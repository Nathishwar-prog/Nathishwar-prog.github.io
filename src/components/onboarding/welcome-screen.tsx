import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { Sparkles, ArrowRight, Target, BookOpen, Users } from "lucide-react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const { user, profile } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const userName = profile?.full_name || user?.email?.split('@')[0] || 'there';

  const welcomeSteps = [
    {
      title: `Welcome to KnowGrow, ${userName}!`,
      subtitle: "Your AI-powered learning journey begins now",
      icon: Sparkles,
      content: "We're excited to help you master new skills and achieve your learning goals through personalized, adaptive content.",
      color: "text-primary"
    },
    {
      title: "Personalized Learning Paths",
      subtitle: "AI adapts to your learning style",
      icon: Target,
      content: "Our advanced AI analyzes your progress and preferences to create custom learning experiences that evolve with you.",
      color: "text-accent"
    },
    {
      title: "Rich Content Library",
      subtitle: "Thousands of courses and resources",
      icon: BookOpen,
      content: "Access expertly crafted courses, interactive projects, and comprehensive resources across multiple disciplines.",
      color: "text-growth"
    },
    {
      title: "Global Learning Community",
      subtitle: "Connect and collaborate worldwide",
      icon: Users,
      content: "Join a vibrant community of learners, share projects, get feedback, and grow together with peers from around the world.",
      color: "text-primary"
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < welcomeSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const currentStepData = welcomeSteps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <Card className="max-w-lg w-full glass-card border-white/20">
        <CardContent className="p-8 text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {welcomeSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-600 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {/* Icon */}
            <div className="flex justify-center">
              <div className={`p-4 rounded-full bg-white/10 ${currentStepData.color}`}>
                <Icon size={32} />
              </div>
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-white">
                {currentStepData.title}
              </h1>
              <p className="text-white/80 font-medium">
                {currentStepData.subtitle}
              </p>
            </div>

            {/* Content */}
            <p className="text-white/70 leading-relaxed">
              {currentStepData.content}
            </p>

            {/* Action Button */}
            <div className="pt-4">
              <Button
                onClick={nextStep}
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm interactive-lift"
                size="lg"
              >
                {currentStep === welcomeSteps.length - 1 ? (
                  <>
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>

            {/* Skip Option */}
            {currentStep < welcomeSteps.length - 1 && (
              <Button
                variant="ghost"
                onClick={onComplete}
                className="text-white/60 hover:text-white/80 text-sm"
              >
                Skip Introduction
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};