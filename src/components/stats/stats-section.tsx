import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const StatsSection = () => {
  const stats = [
    {
      number: "50K+",
      label: "Active Learners",
      description: "Growing community worldwide"
    },
    {
      number: "1M+",
      label: "Courses Completed",
      description: "Skills mastered and careers advanced"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Learners achieve their goals"
    },
    {
      number: "24/7",
      label: "AI Support",
      description: "Always available assistance"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-secondary/50 border-primary/20">
            Our Impact
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Trusted by</span>
            <br />
            Thousands Worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-8 text-center border-primary/10 hover:border-primary/30 transition-all duration-300 interactive-lift animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};