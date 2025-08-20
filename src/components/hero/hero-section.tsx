import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Rocket, Users } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-glow-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-glow-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-growth/10 rounded-full blur-xl animate-glow-pulse delay-2000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <Badge 
          variant="secondary" 
          className="mb-6 px-4 py-2 text-sm font-medium bg-secondary/50 backdrop-blur-sm border border-primary/20 animate-fade-in"
        >
          🚀 AI-Powered Learning Revolution
        </Badge>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in delay-200">
          <span className="text-gradient">Master Skills</span>
          <br />
          <span>That Matter</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Experience personalized learning with AI that adapts to your pace, 
          style, and goals. Join thousands growing their skills on KnowGrow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-500">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 interactive-lift group"
          >
            Start Learning Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5 interactive-lift"
          >
            Watch Demo
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in delay-700">
          <div className="glass-card p-6 interactive-lift">
            <Brain className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">
              Adaptive learning paths that evolve with your progress
            </p>
          </div>
          <div className="glass-card p-6 interactive-lift">
            <Rocket className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Fast Progress</h3>
            <p className="text-sm text-muted-foreground">
              Learn 3x faster with our optimized curriculum
            </p>
          </div>
          <div className="glass-card p-6 interactive-lift">
            <Users className="h-8 w-8 text-growth mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Community</h3>
            <p className="text-sm text-muted-foreground">
              Connect with peers and mentors worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};