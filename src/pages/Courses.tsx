import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  BookOpen,
  Play,
  Heart,
  TrendingUp
} from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Courses", count: 156 },
    { id: "frontend", label: "Frontend Development", count: 45 },
    { id: "backend", label: "Backend Development", count: 32 },
    { id: "data-science", label: "Data Science", count: 28 },
    { id: "design", label: "UI/UX Design", count: 24 },
    { id: "mobile", label: "Mobile Development", count: 18 },
    { id: "devops", label: "DevOps & Cloud", count: 9 }
  ];

  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      description: "Master advanced React concepts including hooks, context, and performance optimization.",
      category: "frontend",
      level: "Advanced",
      duration: "12 hours",
      students: 2847,
      rating: 4.9,
      price: 89,
      thumbnail: "/api/placeholder/400/240",
      tags: ["React", "JavaScript", "Hooks"],
      isPopular: true
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Torres",
      description: "Learn the core concepts of machine learning with hands-on Python projects.",
      category: "data-science",
      level: "Beginner",
      duration: "16 hours",
      students: 4521,
      rating: 4.8,
      price: 119,
      thumbnail: "/api/placeholder/400/240",
      tags: ["Python", "ML", "Data Science"],
      isPopular: true
    },
    {
      id: 3,
      title: "Full-Stack Web Development",
      instructor: "Alex Rodriguez",
      description: "Build complete web applications using modern technologies and best practices.",
      category: "backend",
      level: "Intermediate",
      duration: "24 hours",
      students: 3689,
      rating: 4.7,
      price: 149,
      thumbnail: "/api/placeholder/400/240",
      tags: ["Node.js", "MongoDB", "React"],
      isPopular: false
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      instructor: "Emily Rodriguez",
      description: "Create beautiful and intuitive user interfaces with modern design principles.",
      category: "design",
      level: "Beginner",
      duration: "10 hours",
      students: 1892,
      rating: 4.9,
      price: 79,
      thumbnail: "/api/placeholder/400/240",
      tags: ["Figma", "Design Systems", "UX"],
      isPopular: false
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      instructor: "James Kim",
      description: "Build cross-platform mobile apps using React Native and modern tools.",
      category: "mobile",
      level: "Intermediate",
      duration: "18 hours",
      students: 2156,
      rating: 4.6,
      price: 129,
      thumbnail: "/api/placeholder/400/240",
      tags: ["React Native", "Mobile", "JavaScript"],
      isPopular: false
    },
    {
      id: 6,
      title: "Cloud Architecture with AWS",
      instructor: "Lisa Wang",
      description: "Design and deploy scalable cloud solutions using Amazon Web Services.",
      category: "devops",
      level: "Advanced",
      duration: "20 hours",
      students: 1654,
      rating: 4.8,
      price: 159,
      thumbnail: "/api/placeholder/400/240",
      tags: ["AWS", "Cloud", "DevOps"],
      isPopular: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Browse Courses</h1>
            <p className="text-muted-foreground mt-2">
              Discover new skills and advance your career with our expert-led courses
            </p>
          </div>
          <Badge variant="secondary" className="px-4 py-2">
            {filteredCourses.length} Courses Available
          </Badge>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses, instructors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary/50'
                    }`}
                  >
                    <span className="text-sm font-medium">{category.label}</span>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 interactive-lift">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {course.isPopular && (
                      <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white text-muted-foreground hover:text-red-500"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {course.instructor}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {course.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {course.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {course.level}
                        </Badge>
                        <span className="text-lg font-bold text-primary">
                          ${course.price}
                        </span>
                      </div>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Enroll
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <Card className="p-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No courses found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Courses;