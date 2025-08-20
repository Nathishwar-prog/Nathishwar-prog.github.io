import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavBar } from "@/components/navigation/nav-bar";
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb,
  Globe,
  Heart,
  TrendingUp,
  BookOpen,
  Code,
  Zap,
  Shield,
  Rocket,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { AuthModal } from "@/components/auth/auth-modal";

const About = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      avatar: "/api/placeholder/80/80",
      bio: "Former Google engineer with 10+ years in EdTech. Passionate about democratizing education through AI.",
      specialties: ["AI/ML", "Product Strategy", "EdTech"]
    },
    {
      name: "Dr. Michael Torres",
      role: "CTO & Co-Founder", 
      avatar: "/api/placeholder/80/80",
      bio: "PhD in Computer Science, ex-Meta. Leads our AI-powered learning engine and platform architecture.",
      specialties: ["AI Systems", "Architecture", "Data Science"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Learning Experience",
      avatar: "/api/placeholder/80/80",
      bio: "Educational psychologist and former curriculum designer. Creates engaging learning experiences.",
      specialties: ["Learning Psychology", "UX Design", "Curriculum"]
    },
    {
      name: "James Kim",
      role: "Lead Developer",
      avatar: "/api/placeholder/80/80",
      bio: "Full-stack developer with expertise in scalable web applications and real-time systems.",
      specialties: ["Full-Stack", "React", "Node.js"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Every learner is unique. Our AI adapts to individual learning styles, pace, and preferences."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Learning is better together. We foster collaboration and knowledge sharing among peers."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We partner with industry experts to ensure our content meets the highest standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously explore new technologies to enhance the learning experience."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Quality education should be accessible to everyone, regardless of background or location."
    },
    {
      icon: Heart,
      title: "Passion for Growth",
      description: "We believe in continuous learning and growth, both for our users and ourselves."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Founded",
      description: "KnowGrow was founded with a vision to revolutionize online learning",
      icon: Rocket
    },
    {
      year: "2023",
      title: "First 1,000 Users",
      description: "Reached our first milestone of 1,000 active learners",
      icon: Users
    },
    {
      year: "2024", 
      title: "AI Engine Launch",
      description: "Launched our proprietary AI-powered personalization engine",
      icon: Zap
    },
    {
      year: "2024",
      title: "10,000+ Students",
      description: "Growing community of over 10,000 active learners worldwide",
      icon: TrendingUp
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Expert-designed courses covering the latest technologies and industry best practices"
    },
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Real-world projects that build practical skills and enhance your portfolio"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with peers, join study groups, and learn from the community"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Earn recognized certifications that boost your career prospects"
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Personalized recommendations and learning paths based on your progress"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect your data and learning progress"
    }
  ];

  const stats = [
    { label: "Active Learners", value: "12,000+", icon: Users },
    { label: "Courses Available", value: "150+", icon: BookOpen },
    { label: "Projects Completed", value: "25,000+", icon: Code },
    { label: "Certifications Issued", value: "3,500+", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      <NavBar onAuthClick={() => setIsAuthModalOpen(true)} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-2">
                Revolutionizing Education Since 2023
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Empowering Learners Through
                <span className="block text-gradient-light">AI-Powered Education</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                KnowGrow is more than just a learning platform. We're building the future of education 
                where AI meets human potential to create personalized, engaging, and effective learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 interactive-lift"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 interactive-lift">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="px-6 py-2">Our Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                Democratizing Quality Education
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe that everyone deserves access to high-quality, personalized education. 
                Our mission is to leverage cutting-edge AI technology to create learning experiences 
                that adapt to each individual's unique needs, helping them achieve their full potential.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 interactive-lift">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Personalized</h3>
                  <p className="text-muted-foreground">AI-driven learning paths tailored to your goals and learning style</p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 interactive-lift">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Collaborative</h3>
                  <p className="text-muted-foreground">Learn together with a global community of passionate learners</p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 interactive-lift">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Accredited</h3>
                  <p className="text-muted-foreground">Earn industry-recognized certifications that advance your career</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-8 mb-16">
                <Badge variant="outline" className="px-6 py-2">Our Values</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                  What Drives Us Forward
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our core values guide everything we do, from product development to community building.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 interactive-lift">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{value.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{value.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-8 mb-16">
                <Badge variant="outline" className="px-6 py-2">Platform Features</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                  Everything You Need to Succeed
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 interactive-lift">
                      <Icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-8 mb-16">
                <Badge variant="outline" className="px-6 py-2">Our Journey</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                  Building the Future of Learning
                </h2>
              </div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 interactive-lift">
                      <div className="flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-primary/10 rounded-full">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <Badge className="bg-gradient-primary text-white">{milestone.year}</Badge>
                            <h3 className="text-xl font-semibold">{milestone.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-8 mb-16">
                <Badge variant="outline" className="px-6 py-2">Meet the Team</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                  The Minds Behind KnowGrow
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our diverse team of educators, engineers, and innovators is united by a shared passion 
                  for transforming how people learn and grow.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 interactive-lift">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="text-lg bg-gradient-primary text-white">
                        {member.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of learners who are already growing their skills with KnowGrow. 
                Your personalized learning experience awaits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 interactive-lift"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Explore Features
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default About;