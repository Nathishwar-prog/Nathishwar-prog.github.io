import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Edit3, 
  Save, 
  Camera, 
  Award, 
  BookOpen, 
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Globe,
  Clock,
  Star
} from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const { user, profile, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || "",
    bio: profile?.bio || "",
    timezone: profile?.timezone || "UTC",
    learning_goals: profile?.learning_goals || [],
    skills: profile?.skills || [],
    experience_level: profile?.experience_level || "beginner",
    preferred_learning_style: profile?.preferred_learning_style || "visual"
  });

  const learningStyles = [
    { value: "visual", label: "Visual", description: "Learn through diagrams and images" },
    { value: "auditory", label: "Auditory", description: "Learn through listening and discussion" },
    { value: "kinesthetic", label: "Kinesthetic", description: "Learn through hands-on practice" },
    { value: "reading", label: "Reading/Writing", description: "Learn through text and documentation" }
  ];

  const experienceLevels = [
    { value: "beginner", label: "Beginner", description: "New to programming" },
    { value: "intermediate", label: "Intermediate", description: "Some programming experience" },
    { value: "advanced", label: "Advanced", description: "Experienced developer" },
    { value: "expert", label: "Expert", description: "Senior level expertise" }
  ];

  const userStats = {
    coursesCompleted: 12,
    projectsCompleted: 8,
    certificationsEarned: 3,
    skillsLearned: 15,
    studyHours: 156,
    streakDays: 23,
    currentGoalProgress: 75
  };

  const recentAchievements = [
    {
      title: "React Mastery",
      description: "Completed Advanced React Patterns course",
      date: "2 days ago",
      type: "course",
      icon: BookOpen
    },
    {
      title: "Full-Stack Developer",
      description: "Earned Full-Stack Development certification",
      date: "1 week ago",
      type: "certification",
      icon: Award
    },
    {
      title: "Project Collaboration",
      description: "Successfully collaborated on E-Commerce Dashboard",
      date: "2 weeks ago",
      type: "project",
      icon: Target
    }
  ];

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const { error } = await updateProfile(formData);
      if (!error) {
        setIsEditing(false);
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSkill = (skill: string) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill]
      });
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-4xl">
        {/* Profile Header */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <CardContent className="relative p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile?.avatar_url} />
                  <AvatarFallback className="text-lg bg-gradient-primary text-white">
                    {user?.email?.[0]?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-background"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-bold text-gradient">
                    {profile?.full_name || user?.email?.split('@')[0] || "User"}
                  </h1>
                  <Badge variant="secondary" className="bg-gradient-primary text-white">
                    {formData.experience_level}
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  {profile?.bio || "No bio available"}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {user?.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {profile?.timezone || "UTC"}
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant={isEditing ? "outline" : "default"}
                className={!isEditing ? "bg-gradient-primary hover:opacity-90" : ""}
              >
                <Edit3 className="h-4 w-4 mr-2" />
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{userStats.coursesCompleted}</div>
                <div className="text-sm text-muted-foreground">Courses Completed</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{userStats.projectsCompleted}</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{userStats.certificationsEarned}</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-primary">{userStats.studyHours}</div>
                <div className="text-sm text-muted-foreground">Study Hours</div>
              </Card>
            </div>

            {/* Skills & Learning Goals */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(formData.skills.length > 0 ? formData.skills : ["React", "JavaScript", "Python", "Node.js"]).map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Current Goal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Full-Stack Mastery</span>
                      <span>{userStats.currentGoalProgress}%</span>
                    </div>
                    <Progress value={userStats.currentGoalProgress} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete 5 more projects to achieve your goal
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Learning Streak
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {userStats.streakDays}
                  </div>
                  <p className="text-muted-foreground">Days in a row</p>
                  <div className="mt-4 flex justify-center">
                    <Badge className="bg-gradient-primary text-white">
                      Keep it going! 🔥
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    This Week
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Study Time</span>
                    <span className="font-semibold">12.5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courses Progress</span>
                    <span className="font-semibold">3 lessons</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects Worked</span>
                    <span className="font-semibold">2 projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {achievement.date}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input
                      id="timezone"
                      value={formData.timezone}
                      onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    disabled={!isEditing}
                    rows={3}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Experience Level</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {experienceLevels.map((level) => (
                      <Button
                        key={level.value}
                        variant={formData.experience_level === level.value ? "default" : "outline"}
                        onClick={() => setFormData({...formData, experience_level: level.value})}
                        disabled={!isEditing}
                        className="justify-start p-4 h-auto"
                      >
                        <div className="text-left">
                          <div className="font-semibold">{level.label}</div>
                          <div className="text-xs opacity-70">{level.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Learning Style</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {learningStyles.map((style) => (
                      <Button
                        key={style.value}
                        variant={formData.preferred_learning_style === style.value ? "default" : "outline"}
                        onClick={() => setFormData({...formData, preferred_learning_style: style.value})}
                        disabled={!isEditing}
                        className="justify-start p-4 h-auto"
                      >
                        <div className="text-left">
                          <div className="font-semibold">{style.label}</div>
                          <div className="text-xs opacity-70">{style.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-2 pt-4">
                    <Button 
                      onClick={handleSave}
                      disabled={isLoading}
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Profile;