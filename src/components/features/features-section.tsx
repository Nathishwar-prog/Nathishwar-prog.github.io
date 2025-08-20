import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp,
  Zap,
  Shield,
  Globe
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Adaptive algorithms that personalize your learning journey based on your pace and preferences.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Goal-Oriented Paths",
      description: "Set specific learning objectives and get curated content to achieve your goals faster.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with peers, join study groups, and learn together in our vibrant community.",
      color: "text-growth"
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Earn recognized certificates that validate your expertise and boost your career prospects.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Rich Resource Library",
      description: "Access thousands of courses, tutorials, and resources across multiple disciplines.",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Track your learning progress with detailed analytics and personalized insights.",
      color: "text-growth"
    },
    {
      icon: Zap,
      title: "Interactive Content",
      description: "Engage with hands-on projects, quizzes, and real-world simulations for better retention.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your learning data is protected with enterprise-grade security and privacy measures.",
      color: "text-accent"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Join learners from around the world and expand your network while you grow.",
      color: "text-growth"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-secondary/50 border-primary/20">
            Why Choose KnowGrow
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Powerful Features</span>
            <br />
            for Modern Learners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience learning like never before with our cutting-edge platform 
            designed to accelerate your growth and maximize your potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group border-primary/10 hover:border-primary/30 transition-all duration-300 interactive-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-secondary/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};