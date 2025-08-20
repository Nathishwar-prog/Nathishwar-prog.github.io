import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Plus, 
  Github, 
  ExternalLink, 
  Users, 
  Star,
  Eye,
  GitFork,
  Calendar,
  Code,
  Globe
} from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "my-projects", label: "My Projects" },
    { id: "collaborated", label: "Collaborated" },
    { id: "public", label: "Public" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A modern dashboard for managing online store operations with real-time analytics and inventory management.",
      owner: {
        name: "Sarah Chen",
        avatar: "/api/placeholder/32/32",
        username: "sarahc"
      },
      techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
      status: "completed",
      isPublic: true,
      collaborators: 3,
      stars: 42,
      views: 1250,
      forks: 12,
      githubUrl: "https://github.com/example/ecommerce-dashboard",
      liveUrl: "https://demo-ecommerce.vercel.app",
      lastUpdated: "2 days ago",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI Chat Assistant",
      description: "An intelligent chatbot powered by machine learning that provides customer support and answers questions.",
      owner: {
        name: "Michael Torres",
        avatar: "/api/placeholder/32/32",
        username: "michaelt"
      },
      techStack: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL"],
      status: "in_progress",
      isPublic: true,
      collaborators: 5,
      stars: 89,
      views: 2100,
      forks: 23,
      githubUrl: "https://github.com/example/ai-chat-assistant",
      liveUrl: null,
      lastUpdated: "1 day ago",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application for team collaboration and project management with offline capabilities.",
      owner: {
        name: "Emily Rodriguez",
        avatar: "/api/placeholder/32/32",
        username: "emilyr"
      },
      techStack: ["React Native", "Firebase", "Redux", "TypeScript"],
      status: "planning",
      isPublic: false,
      collaborators: 2,
      stars: 15,
      views: 450,
      forks: 3,
      githubUrl: "https://github.com/example/task-mobile-app",
      liveUrl: null,
      lastUpdated: "5 days ago",
      category: "Mobile"
    },
    {
      id: 4,
      title: "Data Visualization Platform",
      description: "Interactive platform for creating beautiful charts and dashboards from various data sources.",
      owner: {
        name: "James Kim",
        avatar: "/api/placeholder/32/32",
        username: "jamesk"
      },
      techStack: ["Vue.js", "D3.js", "Python", "Flask", "MySQL"],
      status: "completed",
      isPublic: true,
      collaborators: 4,
      stars: 156,
      views: 3200,
      forks: 34,
      githubUrl: "https://github.com/example/data-viz-platform",
      liveUrl: "https://dataviz-platform.netlify.app",
      lastUpdated: "1 week ago",
      category: "Data Science"
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology with smart contracts.",
      owner: {
        name: "Alex Johnson",
        avatar: "/api/placeholder/32/32",
        username: "alexj"
      },
      techStack: ["Solidity", "Web3.js", "React", "Ethereum", "Truffle"],
      status: "in_progress",
      isPublic: true,
      collaborators: 6,
      stars: 78,
      views: 1800,
      forks: 19,
      githubUrl: "https://github.com/example/blockchain-voting",
      liveUrl: null,
      lastUpdated: "3 days ago",
      category: "Blockchain"
    }
  ];

  const statusColors = {
    planning: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    in_progress: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    archived: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  };

  const statusLabels = {
    planning: "Planning",
    in_progress: "In Progress",
    completed: "Completed",
    archived: "Archived"
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "public") return matchesSearch && project.isPublic;
    if (selectedFilter === "my-projects") return matchesSearch; // This would filter by current user
    if (selectedFilter === "collaborated") return matchesSearch; // This would filter by collaboration
    
    return matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Projects</h1>
            <p className="text-muted-foreground mt-2">
              Collaborate on real-world projects and build your portfolio
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 interactive-lift">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects, technologies, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 interactive-lift">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={project.owner.avatar} />
                        <AvatarFallback>{project.owner.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        {project.owner.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge className={statusColors[project.status]} variant="secondary">
                      {statusLabels[project.status]}
                    </Badge>
                    {project.isPublic && (
                      <Globe className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      <span>{project.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{project.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{project.collaborators}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Updated {project.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  <Code className="h-4 w-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card className="p-12 text-center">
            <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or create a new project
            </p>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Project
            </Button>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Projects;