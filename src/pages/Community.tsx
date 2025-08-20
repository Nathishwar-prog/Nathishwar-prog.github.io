import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Plus,
  Search,
  Filter,
  Heart,
  Share2,
  BookOpen,
  Code,
  Lightbulb,
  HelpCircle,
  Star,
  Eye,
  Calendar,
  ArrowUp,
  MessageCircle,
  Pin,
  Award,
  Zap
} from "lucide-react";

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Posts", count: 1247, icon: MessageSquare },
    { id: "discussions", label: "Discussions", count: 543, icon: MessageCircle },
    { id: "questions", label: "Questions", icon: HelpCircle, count: 321 },
    { id: "projects", label: "Project Showcase", count: 189, icon: Code },
    { id: "tips", label: "Tips & Tricks", count: 156, icon: Lightbulb },
    { id: "resources", label: "Resource Sharing", count: 98, icon: BookOpen }
  ];

  const trendingTopics = [
    { name: "React 19", posts: 45, growth: "+12%" },
    { name: "AI Integration", posts: 32, growth: "+28%" },
    { name: "Web3 Development", posts: 28, growth: "+15%" },
    { name: "Mobile First Design", posts: 24, growth: "+8%" },
    { name: "Performance Optimization", posts: 19, growth: "+22%" }
  ];

  const communityPosts = [
    {
      id: 1,
      title: "How to optimize React app performance for mobile devices?",
      content: "I'm working on a React application that feels sluggish on mobile devices. I've tried code splitting and lazy loading, but still experiencing issues. What are your best practices for mobile optimization?",
      author: {
        name: "Sarah Chen",
        avatar: "/api/placeholder/40/40",
        username: "sarahc",
        reputation: 2847,
        badge: "Expert"
      },
      category: "questions",
      tags: ["React", "Performance", "Mobile", "Optimization"],
      createdAt: "2 hours ago",
      upvotes: 23,
      replies: 8,
      views: 156,
      isAnswered: false,
      isPinned: false,
      hasAcceptedAnswer: false
    },
    {
      id: 2,
      title: "🚀 Just launched my first full-stack e-commerce app!",
      content: "After 3 months of development, I'm excited to share my e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard. Would love your feedback!",
      author: {
        name: "Alex Rodriguez",
        avatar: "/api/placeholder/40/40",
        username: "alexr",
        reputation: 1456,
        badge: "Intermediate"
      },
      category: "projects",
      tags: ["React", "Node.js", "PostgreSQL", "E-commerce", "Full-Stack"],
      createdAt: "4 hours ago",
      upvotes: 47,
      replies: 12,
      views: 289,
      isAnswered: false,
      isPinned: false,
      hasAcceptedAnswer: false
    },
    {
      id: 3,
      title: "📚 Essential VS Code extensions for Python developers",
      content: "Here's my curated list of must-have VS Code extensions that have significantly improved my Python development workflow...",
      author: {
        name: "Dr. Michael Torres",
        avatar: "/api/placeholder/40/40",
        username: "drmichael",
        reputation: 4521,
        badge: "Mentor"
      },
      category: "tips",
      tags: ["Python", "VS Code", "Extensions", "Productivity"],
      createdAt: "6 hours ago",
      upvotes: 89,
      replies: 15,
      views: 432,
      isAnswered: false,
      isPinned: true,
      hasAcceptedAnswer: false
    },
    {
      id: 4,
      title: "Machine Learning resources for complete beginners?",
      content: "I'm transitioning from web development to ML and feeling overwhelmed. Can anyone recommend the best learning path and resources for someone with programming background but zero ML experience?",
      author: {
        name: "Emily Rodriguez",
        avatar: "/api/placeholder/40/40",
        username: "emilyr",
        reputation: 892,
        badge: "Beginner"
      },
      category: "questions",
      tags: ["Machine Learning", "Beginner", "Resources", "Career"],
      createdAt: "8 hours ago",
      upvotes: 34,
      replies: 22,
      views: 278,
      isAnswered: true,
      isPinned: false,
      hasAcceptedAnswer: true
    },
    {
      id: 5,
      title: "💡 CSS Grid vs Flexbox: When to use which?",
      content: "A comprehensive guide to choosing between CSS Grid and Flexbox based on your layout needs, with practical examples and use cases.",
      author: {
        name: "James Kim",
        avatar: "/api/placeholder/40/40",
        username: "jamesk",
        reputation: 3156,
        badge: "Expert"
      },
      category: "tips",
      tags: ["CSS", "Grid", "Flexbox", "Layout", "Frontend"],
      createdAt: "12 hours ago",
      upvotes: 67,
      replies: 9,
      views: 523,
      isAnswered: false,
      isPinned: false,
      hasAcceptedAnswer: false
    }
  ];

  const topContributors = [
    {
      name: "Dr. Michael Torres",
      username: "drmichael",
      avatar: "/api/placeholder/48/48",
      reputation: 4521,
      badge: "Mentor",
      posts: 89,
      helpfulAnswers: 156
    },
    {
      name: "Sarah Chen",
      username: "sarahc", 
      avatar: "/api/placeholder/48/48",
      reputation: 3847,
      badge: "Expert",
      posts: 67,
      helpfulAnswers: 134
    },
    {
      name: "James Kim",
      username: "jamesk",
      avatar: "/api/placeholder/48/48",
      reputation: 3156,
      badge: "Expert", 
      posts: 54,
      helpfulAnswers: 98
    }
  ];

  const badgeColors = {
    "Mentor": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "Expert": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Intermediate": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Beginner": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  };

  const categoryIcons = {
    discussions: MessageCircle,
    questions: HelpCircle,
    projects: Code,
    tips: Lightbulb,
    resources: BookOpen
  };

  const filteredPosts = communityPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Community</h1>
            <p className="text-muted-foreground mt-2">
              Connect, learn, and grow with fellow developers worldwide
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 interactive-lift">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">12.5k</div>
            <div className="text-sm text-muted-foreground">Members</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">1.2k</div>
            <div className="text-sm text-muted-foreground">Posts</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">89%</div>
            <div className="text-sm text-muted-foreground">Questions Answered</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">24h</div>
            <div className="text-sm text-muted-foreground">Avg Response Time</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{category.label}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{topic.name}</div>
                      <div className="text-xs text-muted-foreground">{topic.posts} posts</div>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                      {topic.growth}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5 text-primary" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={contributor.avatar} />
                      <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm truncate">{contributor.name}</span>
                        <Badge className={`text-xs ${badgeColors[contributor.badge]}`} variant="secondary">
                          {contributor.badge}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {contributor.reputation.toLocaleString()} rep
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search posts, topics, or users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => {
                const CategoryIcon = categoryIcons[post.category] || MessageSquare;
                return (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 interactive-lift">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {/* Vote Section */}
                        <div className="flex flex-col items-center gap-2 min-w-0">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowUp className="h-4 w-4" />
                          </Button>
                          <span className="text-sm font-medium">{post.upvotes}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowUp className="h-4 w-4 rotate-180" />
                          </Button>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {post.isPinned && <Pin className="h-4 w-4 text-primary" />}
                                <CategoryIcon className="h-4 w-4 text-muted-foreground" />
                                <Badge variant="outline" className="text-xs">
                                  {categories.find(c => c.id === post.category)?.label}
                                </Badge>
                                {post.hasAcceptedAnswer && (
                                  <Badge className="text-xs bg-green-100 text-green-800">
                                    ✓ Solved
                                  </Badge>
                                )}
                              </div>
                              <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {post.content}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Author and Stats */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={post.author.avatar} />
                                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-sm">{post.author.name}</span>
                                <Badge className={`text-xs ${badgeColors[post.author.badge]}`} variant="secondary">
                                  {post.author.badge}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {post.author.reputation.toLocaleString()} rep
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.views}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>{post.replies}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>{post.createdAt}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                            <Button variant="ghost" size="sm">
                              <Heart className="h-4 w-4 mr-2" />
                              Like
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Reply
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <Card className="p-12 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No posts found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or start a new discussion
                </p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Post
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;