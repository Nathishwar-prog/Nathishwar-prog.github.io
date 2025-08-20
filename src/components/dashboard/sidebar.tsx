import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home,
  BookOpen,
  FolderOpen,
  Users,
  Award,
  Settings,
  HelpCircle,
  X,
  ChevronDown,
  ChevronRight,
  Library,
  MessageSquare,
  User,
  Code2
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      badge: null
    },
    {
      label: "Courses",
      icon: BookOpen,
      href: "/courses",
      badge: "156"
    },
    {
      label: "Projects",
      icon: Code2,
      href: "/projects",
      badge: null
    },
    {
      label: "Resources",
      icon: Library,
      href: "/resources",
      badge: "284"
    },
    {
      label: "Community",
      icon: MessageSquare,
      href: "/community",
      badge: "12"
    },
    {
      label: "Certifications",
      icon: Award,
      href: "/certifications",
      badge: "24"
    }
  ];

  const bottomItems = [
    { label: "Profile", icon: User, href: "/profile" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
    { label: "Help", icon: HelpCircle, href: "/help" }
  ];

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <div className="flex flex-col h-full bg-card">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Logo size="md" />
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
            <X size={20} />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {/* Main Navigation Items */}
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors group interactive-scale",
                isActive(item.href)
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:shadow-sm"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
                {item.label}
              </div>
              {item.badge && (
                <Badge 
                  variant={isActive(item.href) ? "secondary" : "outline"} 
                  className="h-5 px-2 text-xs transition-colors"
                >
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="p-4 border-t border-border space-y-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors group interactive-scale",
                isActive(item.href)
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:shadow-sm"
              )}
            >
              <Icon size={18} className="group-hover:scale-110 transition-transform duration-200" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};