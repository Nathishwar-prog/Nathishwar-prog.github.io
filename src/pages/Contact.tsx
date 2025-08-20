import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { NavBar } from "@/components/navigation/nav-bar";
import { AuthModal } from "@/components/auth/auth-modal";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  HelpCircle,
  Users,
  Briefcase,
  Send,
  CheckCircle,
  ArrowRight,
  Globe
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      contact: "hello@knowgrow.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      contact: "123 Innovation Drive, San Francisco, CA 94105",
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here to help",
      contact: "Mon-Fri: 9AM-6PM PST",
      action: "View Schedule"
    }
  ];

  const categories = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "support", label: "Technical Support", icon: HelpCircle },
    { value: "partnership", label: "Partnership", icon: Briefcase },
    { value: "feedback", label: "Feedback", icon: Users }
  ];

  const faqs = [
    {
      question: "How do I get started with KnowGrow?",
      answer: "Simply sign up for a free account and complete our quick onboarding process. You'll get personalized course recommendations based on your goals and experience level."
    },
    {
      question: "Are the certifications industry-recognized?",
      answer: "Yes! Our certifications are designed in partnership with industry experts and are recognized by leading tech companies worldwide."
    },
    {
      question: "Can I access courses offline?",
      answer: "Yes, our mobile app allows you to download course content for offline viewing. Perfect for learning on the go!"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and offer flexible payment plans for premium courses and certifications."
    },
    {
      question: "Do you offer group or corporate training?",
      answer: "Absolutely! We have specialized enterprise solutions for teams and organizations. Contact our sales team for custom packages."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "general",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
                We're Here to Help
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Get in Touch with
                <span className="block text-gradient-light">KnowGrow</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Have questions, feedback, or need support? Our team is here to help you succeed 
                on your learning journey. Reach out to us anytime!
              </p>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 interactive-lift">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                    <p className="font-medium mb-4">{info.contact}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {info.action}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & FAQ */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <Badge variant="outline" className="px-4 py-2 mb-4">Send us a message</Badge>
                  <h2 className="text-3xl font-bold text-gradient mb-4">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible. 
                    We typically respond within 24 hours.
                  </p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                              <Button
                                key={category.value}
                                type="button"
                                variant={formData.category === category.value ? "default" : "outline"}
                                onClick={() => handleInputChange("category", category.value)}
                                className="justify-start p-3 h-auto"
                              >
                                <Icon className="h-4 w-4 mr-2" />
                                <span className="text-sm">{category.label}</span>
                              </Button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="Brief description of your inquiry"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us more about how we can help you..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-primary hover:opacity-90 interactive-lift"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Sending...
                          </div>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <div>
                <div className="mb-8">
                  <Badge variant="outline" className="px-4 py-2 mb-4">Frequently Asked</Badge>
                  <h2 className="text-3xl font-bold text-gradient mb-4">
                    Quick Answers
                  </h2>
                  <p className="text-muted-foreground">
                    Find answers to common questions about KnowGrow. 
                    Can't find what you're looking for? Send us a message!
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm pl-8">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 bg-gradient-primary text-white">
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="h-8 w-8 mx-auto mb-4 opacity-90" />
                    <h3 className="font-semibold text-lg mb-2">Still have questions?</h3>
                    <p className="text-white/90 text-sm mb-4">
                      Our support team is available 24/7 to help you with any questions or issues.
                    </p>
                    <Button 
                      variant="outline" 
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      Contact Support
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Global Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="p-8 bg-gradient-subtle rounded-2xl">
                <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gradient mb-4">
                  Global Support, Local Care
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  With team members across different time zones, we provide round-the-clock support 
                  to learners worldwide. No matter where you are, we're here to help you succeed.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold">Americas</div>
                    <div className="text-muted-foreground">9 AM - 9 PM PST</div>
                  </div>
                  <div>
                    <div className="font-semibold">Europe</div>
                    <div className="text-muted-foreground">9 AM - 6 PM CET</div>
                  </div>
                  <div>
                    <div className="font-semibold">Asia Pacific</div>
                    <div className="text-muted-foreground">9 AM - 6 PM JST</div>
                  </div>
                </div>
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
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of learners who have already started their journey with KnowGrow. 
                Your personalized learning experience is just one click away.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 interactive-lift"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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

export default Contact;