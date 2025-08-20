import { useAuth } from "@/hooks/use-auth";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Trophy, 
  Users, 
  Target,
  TrendingUp,
  Calendar,
  Star,
  ChevronRight,
  Clock,
  Award,
  Play
} from "lucide-react";

const Dashboard = () => {
  const { user, profile } = useAuth();

  const stats = [
    {
      label: "Courses in Progress",
      value: "3",
      icon: BookOpen,
      color: "text-primary",
      change: "+2 this week"
    },
    {
      label: "Certifications Earned",
      value: "12",
      icon: Trophy,
      color: "text-accent",
      change: "+1 this month"
    },
    {
      label: "Study Streak",
      value: "7 days",
      icon: Calendar,
      color: "text-growth",
      change: "Keep it up!"
    },
    {
      label: "Learning Score",
      value: "85%",
      icon: TrendingUp,
      color: "text-primary",
      change: "+5% improvement"
    }
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      progress: 75,
      thumbnail: "/api/placeholder/400/200",
      category: "Frontend Development",
      duration: "4h 30m remaining"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Torres",
      progress: 45,
      thumbnail: "/api/placeholder/400/200",
      category: "Data Science",
      duration: "8h 15m remaining"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emily Rodriguez",
      progress: 90,
      thumbnail: "/api/placeholder/400/200",
      category: "Design",
      duration: "1h 45m remaining"
    }
  ];

  const recentAchievements = [
    {
      id: 1,
      title: "JavaScript Expert",
      description: "Completed advanced JavaScript course",
      date: "2 days ago",
      badge: "🏆"
    },
    {
      id: 2,
      title: "Team Player",
      description: "Collaborated on 3 projects",
      date: "1 week ago",
      badge: "🤝"
    },
    {
      id: 3,
      title: "Quick Learner",
      description: "Completed course in record time",
      date: "2 weeks ago",
      badge: "⚡"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gradient">
              Welcome back, {profile?.full_name || user?.email?.split('@')[0]}!
            </h1>
            <p className="text-muted-foreground mt-2">
              Ready to continue your learning journey? Let's achieve your goals today.
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 interactive-lift">
            <Target className="h-4 w-4 mr-2" />
            Set Today's Goal
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="interactive-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Continue Learning
                </CardTitle>
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="flex gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors group">
                    <div className="w-20 h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            by {course.instructor}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {course.category}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>{course.progress}% complete</span>
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.duration}
                          </span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Achievements */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="flex gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="text-2xl">{achievement.badge}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Learning Goals */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-growth" />
                  This Week's Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Complete React course</span>
                    <Badge variant="outline" className="text-xs">75%</Badge>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Practice coding daily</span>
                    <Badge variant="outline" className="text-xs">5/7</Badge>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Read 2 tech articles</span>
                    <Badge className="text-xs bg-growth text-growth-foreground">Done</Badge>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;