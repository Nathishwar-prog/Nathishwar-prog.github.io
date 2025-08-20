import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Star, 
  Download, 
  ExternalLink, 
  BookOpen,
  Video,
  FileText,
  Code,
  Headphones,
  Image,
  Users,
  Heart,
  Plus,
  TrendingUp,
  Clock,
  Eye
} from "lucide-react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const categories = [
    { id: "all", label: "All Categories", count: 284 },
    { id: "web-development", label: "Web Development", count: 89 },
    { id: "data-science", label: "Data Science", count: 45 },
    { id: "mobile-development", label: "Mobile Development", count: 32 },
    { id: "design", label: "UI/UX Design", count: 28 },
    { id: "devops", label: "DevOps & Cloud", count: 21 },
    { id: "ai-ml", label: "AI & Machine Learning", count: 35 },
    { id: "blockchain", label: "Blockchain", count: 16 },
    { id: "cybersecurity", label: "Cybersecurity", count: 18 }
  ];

  const resourceTypes = [
    { id: "all", label: "All Types", icon: FileText },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "videos", label: "Videos", icon: Video },
    { id: "tutorials", label: "Tutorials", icon: BookOpen },
    { id: "tools", label: "Tools", icon: Code },
    { id: "podcasts", label: "Podcasts", icon: Headphones },
    { id: "templates", label: "Templates", icon: Image }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete React Developer Guide 2024",
      description: "Comprehensive guide covering React fundamentals, hooks, context, and advanced patterns with real-world examples.",
      type: "articles",
      category: "web-development",
      author: "Sarah Chen",
      url: "https://example.com/react-guide",
      thumbnail: "/api/placeholder/300/200",
      tags: ["React", "JavaScript", "Hooks", "Components"],
      difficulty: "Intermediate",
      rating: 4.9,
      views: 12500,
      likes: 892,
      duration: "45 min read",
      isBookmarked: false,
      isPremium: false,
      publishedAt: "2 days ago"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals Video Series",
      description: "Learn ML concepts from scratch with Python implementations and real datasets. Perfect for beginners.",
      type: "videos",
      category: "data-science",
      author: "Dr. Michael Torres",
      url: "https://example.com/ml-series",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Python", "Machine Learning", "Data Science", "Algorithms"],
      difficulty: "Beginner",
      rating: 4.8,
      views: 8900,
      likes: 654,
      duration: "8 hours",
      isBookmarked: true,
      isPremium: true,
      publishedAt: "1 week ago"
    },
    {
      id: 3,
      title: "Modern CSS Grid & Flexbox Toolkit",
      description: "Interactive tools and generators for CSS Grid and Flexbox layouts. Speed up your frontend development.",
      type: "tools",
      category: "web-development",
      author: "Alex Rodriguez",
      url: "https://example.com/css-toolkit",
      thumbnail: "/api/placeholder/300/200",
      tags: ["CSS", "Grid", "Flexbox", "Layout", "Design"],
      difficulty: "Beginner",
      rating: 4.7,
      views: 15600,
      likes: 1200,
      duration: "Tool",
      isBookmarked: false,
      isPremium: false,
      publishedAt: "3 days ago"
    },
    {
      id: 4,
      title: "Mobile App Design System Template",
      description: "Complete Figma template with components, patterns, and guidelines for mobile app design.",
      type: "templates",
      category: "design",
      author: "Emily Rodriguez",
      url: "https://example.com/design-system",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Figma", "Design System", "Mobile", "UI/UX", "Templates"],
      difficulty: "Intermediate",
      rating: 4.9,
      views: 6700,
      likes: 445,
      duration: "Template",
      isBookmarked: true,
      isPremium: true,
      publishedAt: "5 days ago"
    },
    {
      id: 5,
      title: "Building Scalable Node.js APIs",
      description: "Step-by-step tutorial on creating production-ready REST APIs with authentication, testing, and deployment.",
      type: "tutorials",
      category: "web-development",
      author: "James Kim",
      url: "https://example.com/nodejs-api",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Node.js", "API", "Express", "MongoDB", "Authentication"],
      difficulty: "Advanced",
      rating: 4.8,
      views: 9800,
      likes: 723,
      duration: "3 hours",
      isBookmarked: false,
      isPremium: false,
      publishedAt: "1 week ago"
    },
    {
      id: 6,
      title: "The Future of Web Development Podcast",
      description: "Weekly discussions on emerging web technologies, industry trends, and career advice from experts.",
      type: "podcasts",
      category: "web-development",
      author: "Tech Talks Weekly",
      url: "https://example.com/web-dev-podcast",
      thumbnail: "/api/placeholder/300/200",
      tags: ["Podcast", "Web Development", "Trends", "Career", "Technology"],
      difficulty: "All Levels",
      rating: 4.6,
      views: 23400,
      likes: 1890,
      duration: "50 min episodes",
      isBookmarked: true,
      isPremium: false,
      publishedAt: "2 days ago"
    }
  ];

  const difficultyColors = {
    "Beginner": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Intermediate": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "Advanced": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "All Levels": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
  };

  const typeIcons = {
    articles: FileText,
    videos: Video,
    tutorials: BookOpen,
    tools: Code,
    podcasts: Headphones,
    templates: Image
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesType = selectedType === "all" || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredResources = resources.filter(r => r.rating >= 4.8).slice(0, 3);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Resource Library</h1>
            <p className="text-muted-foreground mt-2">
              Curated learning materials, tools, and resources to accelerate your growth
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 interactive-lift">
            <Plus className="h-4 w-4 mr-2" />
            Contribute Resource
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search resources, topics, or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
            <Badge variant="secondary" className="px-4 py-2">
              {filteredResources.length} Resources
            </Badge>
          </div>
        </div>

        {/* Featured Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Featured Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredResources.map((resource) => {
                const TypeIcon = typeIcons[resource.type];
                return (
                  <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 interactive-lift">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center">
                        <TypeIcon className="h-8 w-8 text-white opacity-80" />
                      </div>
                      <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{resource.rating}</span>
                        </div>
                        <Button size="sm" variant="outline" className="h-7 text-xs">
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            {resourceTypes.map((type) => {
              const Icon = type.icon;
              return (
                <TabsTrigger 
                  key={type.id} 
                  value={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{type.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

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

            {/* Resources Grid */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredResources.map((resource) => {
                  const TypeIcon = typeIcons[resource.type];
                  return (
                    <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 interactive-lift">
                      <div className="relative">
                        <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center">
                          <TypeIcon className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                        {resource.isPremium && (
                          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                            Premium
                          </Badge>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${
                            resource.isBookmarked ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${resource.isBookmarked ? 'fill-current' : ''}`} />
                        </Button>
                      </div>
                      
                      <CardContent className="p-4 space-y-3">
                        <div className="space-y-2">
                          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            by {resource.author}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {resource.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {resource.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{resource.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{resource.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              <span>{resource.likes}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={`text-xs ${difficultyColors[resource.difficulty]}`}>
                              {resource.difficulty}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{resource.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Open
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {filteredResources.length === 0 && (
                <Card className="p-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No resources found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    <Plus className="h-4 w-4 mr-2" />
                    Contribute a Resource
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Resources;