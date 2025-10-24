import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, ArrowRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample blog posts - in production, this would come from a CMS or Firestore
const blogPosts = [
  {
    id: "1",
    title: "10 Sustainable Design Principles for Modern Homes",
    excerpt: "Discover how to incorporate eco-friendly elements into your home design without compromising on style or comfort.",
    author: "People Architect",
    date: "March 15, 2024",
    category: "Sustainability",
    readTime: "5 min read",
    image: "blog-1"
  },
  {
    id: "2",
    title: "The Art of Space Planning: Maximizing Small Apartments",
    excerpt: "Learn professional techniques for making the most of limited square footage through smart space planning and design.",
    author: "People Architect",
    date: "March 10, 2024",
    category: "Interior Design",
    readTime: "7 min read",
    image: "blog-2"
  },
  {
    id: "3",
    title: "Material Matters: Choosing the Right Finishes",
    excerpt: "A comprehensive guide to selecting materials and finishes that balance aesthetics, durability, and budget.",
    author: "People Architect",
    date: "March 5, 2024",
    category: "Materials",
    readTime: "6 min read",
    image: "blog-3"
  },
  {
    id: "4",
    title: "Biophilic Design: Bringing Nature Indoors",
    excerpt: "Explore how incorporating natural elements can enhance wellbeing and create healthier living spaces.",
    author: "People Architect",
    date: "February 28, 2024",
    category: "Design Trends",
    readTime: "4 min read",
    image: "blog-4"
  }
];

const categories = ["All", "Sustainability", "Interior Design", "Materials", "Design Trends", "Architecture"];

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-primary hover:text-gold-highlight transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-ui text-sm">Back to Home</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Design <span className="text-gradient">Insights</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="font-body text-lg text-muted-foreground">
              Explore our latest thoughts on architecture, interior design, materials, and design trends.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-12 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-card"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-ui text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-gold text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_40px_rgba(203,161,53,0.15)] cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="aspect-video bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Featured Image</span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-ui text-xs">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="font-body text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
