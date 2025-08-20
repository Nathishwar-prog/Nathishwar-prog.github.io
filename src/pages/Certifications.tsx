import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Download, 
  ExternalLink, 
  Star, 
  Clock,
  Users,
  CheckCircle,
  Target,
  Trophy,
  Medal,
  FileText,
  Calendar,
  ArrowRight,
  Lock,
  Play
} from "lucide-react";

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Certifications", count: 24 },
    { id: "web-development", label: "Web Development", count: 8 },
    { id: "data-science", label: "Data Science", count: 6 },
    { id: "cloud", label: "Cloud & DevOps", count: 4 },
    { id: "mobile", label: "Mobile Development", count: 3 },
    { id: "design", label: "UI/UX Design", count: 3 }
  ];

  const userCertifications = [
    {
      id: 1,
      title: "Full-Stack Web Developer",
      issuer: "KnowGrow Academy",
      description: "Complete certification covering frontend, backend, and database technologies",
      earnedAt: "2024-01-15",
      certificateUrl: "https://example.com/cert/1",
      verificationCode: "KG-FSWD-2024-001",
      skills: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
      credentialId: "FS-WD-2024-001"
    },
    {
      id: 2,
      title: "React Advanced Patterns",
      issuer: "KnowGrow Academy",
      description: "Advanced React development including hooks, context, and performance optimization",
      earnedAt: "2024-02-20",
      certificateUrl: "https://example.com/cert/2",
      verificationCode: "KG-RAP-2024-002",
      skills: ["React", "Hooks", "Context", "Performance"],
      credentialId: "RAP-2024-002"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      issuer: "KnowGrow Academy",
      description: "Introduction to machine learning algorithms and implementations",
      earnedAt: "2024-03-10",
      certificateUrl: "https://example.com/cert/3",
      verificationCode: "KG-MLF-2024-003",
      skills: ["Python", "Machine Learning", "Data Analysis", "Algorithms"],
      credentialId: "MLF-2024-003"
    }
  ];

  const availableCertifications = [
    {
      id: 4,
      title: "Advanced JavaScript Developer",
      issuer: "KnowGrow Academy",
      description: "Master advanced JavaScript concepts including closures, prototypes, and async programming",
      category: "web-development",
      difficulty: "Advanced",
      duration: "8 weeks",
      prerequisites: ["JavaScript Fundamentals", "DOM Manipulation"],
      skills: ["JavaScript", "ES6+", "Async/Await", "Closures", "Prototypes"],
      requirements: [
        "Complete 6 advanced JavaScript projects",
        "Pass final assessment with 80% score",
        "Peer code review participation"
      ],
      enrolledStudents: 1247,
      rating: 4.9,
      price: 199,
      isLocked: false,
      progress: 0,
      badgeColor: "bg-blue-500"
    },
    {
      id: 5,
      title: "Cloud Architecture Professional",
      issuer: "KnowGrow Academy",
      description: "Design and implement scalable cloud solutions using AWS and Azure",
      category: "cloud",
      difficulty: "Expert",
      duration: "12 weeks",
      prerequisites: ["Cloud Fundamentals", "System Design"],
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      requirements: [
        "Deploy 3 production-ready applications",
        "Design scalable architecture diagrams",
        "Complete cloud security assessment"
      ],
      enrolledStudents: 892,
      rating: 4.8,
      price: 299,
      isLocked: false,
      progress: 25,
      badgeColor: "bg-purple-500"
    },
    {
      id: 6,
      title: "Data Science Specialist",
      issuer: "KnowGrow Academy",
      description: "Comprehensive data analysis, visualization, and machine learning certification",
      category: "data-science",
      difficulty: "Intermediate",
      duration: "10 weeks",
      prerequisites: ["Python Basics", "Statistics Fundamentals"],
      skills: ["Python", "Pandas", "Scikit-learn", "Visualization", "Statistics"],
      requirements: [
        "Complete 4 data analysis projects",
        "Build and deploy ML model",
        "Present findings to panel"
      ],
      enrolledStudents: 2156,
      rating: 4.9,
      price: 249,
      isLocked: false,
      progress: 60,
      badgeColor: "bg-green-500"
    },
    {
      id: 7,
      title: "Mobile App Development Expert",
      issuer: "KnowGrow Academy",
      description: "Cross-platform mobile development using React Native and Flutter",
      category: "mobile",
      difficulty: "Advanced",
      duration: "9 weeks",
      prerequisites: ["JavaScript/Dart", "Mobile Design Principles"],
      skills: ["React Native", "Flutter", "Mobile UI", "State Management"],
      requirements: [
        "Publish 2 apps to app stores",
        "Implement offline functionality",
        "Performance optimization"
      ],
      enrolledStudents: 745,
      rating: 4.7,
      price: 229,
      isLocked: true,
      progress: 0,
      badgeColor: "bg-orange-500"
    },
    {
      id: 8,
      title: "UX/UI Design Master",
      issuer: "KnowGrow Academy",
      description: "Complete user experience and interface design certification",
      category: "design",
      difficulty: "Intermediate",
      duration: "8 weeks",
      prerequisites: ["Design Fundamentals", "User Research"],
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      requirements: [
        "Design 3 complete user journeys",
        "Conduct user testing sessions",
        "Build comprehensive design system"
      ],
      enrolledStudents: 1543,
      rating: 4.8,
      price: 189,
      isLocked: false,
      progress: 0,
      badgeColor: "bg-pink-500"
    }
  ];

  const difficultyColors = {
    "Beginner": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Intermediate": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "Advanced": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    "Expert": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
  };

  const filteredCertifications = availableCertifications.filter(cert => 
    selectedCategory === "all" || cert.category === selectedCategory
  );

  const inProgressCertifications = availableCertifications.filter(cert => cert.progress > 0);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Certifications</h1>
            <p className="text-muted-foreground mt-2">
              Earn industry-recognized certifications to validate your skills
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              {userCertifications.length} Earned
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              {inProgressCertifications.length} In Progress
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="earned" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="earned">Earned Certifications</TabsTrigger>
            <TabsTrigger value="available">Available Certifications</TabsTrigger>
            <TabsTrigger value="progress">In Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="earned" className="space-y-6">
            {userCertifications.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userCertifications.map((cert) => (
                  <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300 interactive-lift">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {cert.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Earned:</span>
                          <span className="font-medium">
                            {new Date(cert.earnedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Credential ID:</span>
                          <span className="font-mono text-xs">{cert.credentialId}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No certifications earned yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start learning and earn your first certification
                </p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Browse Available Certifications
                </Button>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="available" className="space-y-6">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredCertifications.map((cert) => (
                <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300 interactive-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 ${cert.badgeColor} rounded-lg`}>
                          <Medal className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                      {cert.isLocked && (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {cert.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{cert.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{cert.enrolledStudents.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{cert.rating}</span>
                      </div>
                      <Badge className={`w-fit ${difficultyColors[cert.difficulty]}`} variant="secondary">
                        {cert.difficulty}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Prerequisites:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.prerequisites.map((prereq) => (
                          <Badge key={prereq} variant="outline" className="text-xs">
                            {prereq}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Skills you'll gain:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 5).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Requirements:</span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {cert.requirements.slice(0, 2).map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {cert.requirements.length > 2 && (
                          <li className="text-muted-foreground">
                            +{cert.requirements.length - 2} more requirements
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-lg font-bold text-primary">
                        ${cert.price}
                      </div>
                      <Button 
                        className="bg-gradient-primary hover:opacity-90"
                        disabled={cert.isLocked}
                      >
                        {cert.isLocked ? (
                          <>
                            <Lock className="h-4 w-4 mr-2" />
                            Locked
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Start Journey
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            {inProgressCertifications.length > 0 ? (
              <div className="space-y-4">
                {inProgressCertifications.map((cert) => (
                  <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 ${cert.badgeColor} rounded-lg`}>
                            <Target className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{cert.title}</h3>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          In Progress
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{cert.progress}% Complete</span>
                        </div>
                        <Progress value={cert.progress} className="h-2" />
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mt-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{cert.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Est. completion: 4 weeks</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>3/8 projects done</span>
                          </div>
                          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                            <ArrowRight className="h-4 w-4 mr-2" />
                            Continue
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No certifications in progress</h3>
                <p className="text-muted-foreground mb-4">
                  Start a certification journey to track your progress here
                </p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Browse Available Certifications
                </Button>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Certifications;