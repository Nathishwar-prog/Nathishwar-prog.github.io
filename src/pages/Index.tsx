import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { NavBar } from "@/components/navigation/nav-bar";
import { HeroSection } from "@/components/hero/hero-section";
import { FeaturesSection } from "@/components/features/features-section";
import { StatsSection } from "@/components/stats/stats-section";
import { AuthModal } from "@/components/auth/auth-modal";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { user, loading } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Show loading while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Redirect to dashboard if authenticated
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleAuthSuccess = () => {
    console.log("Authentication successful");
  };

  return (
    <div className="min-h-screen">
      <NavBar onAuthClick={() => setIsAuthModalOpen(true)} />
      
      <main>
        <HeroSection onGetStarted={() => setIsAuthModalOpen(true)} />
        <FeaturesSection />
        <StatsSection />
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
