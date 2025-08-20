import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  onAuthClick?: () => void;
}

export const NavBar = ({ onAuthClick }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Courses", href: "/courses" },
    { label: "Projects", href: "/projects" },
    { label: "Community", href: "/community" },
    { label: "Resources", href: "/resources" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={onAuthClick}
            className="font-medium"
          >
            Sign In
          </Button>
          <Button 
            onClick={onAuthClick}
            className="bg-gradient-primary hover:opacity-90 font-medium"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button 
                variant="ghost" 
                onClick={onAuthClick}
                className="w-full font-medium"
              >
                Sign In
              </Button>
              <Button 
                onClick={onAuthClick}
                className="w-full bg-gradient-primary hover:opacity-90 font-medium"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};