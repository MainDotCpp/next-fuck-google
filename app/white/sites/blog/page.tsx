import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "10 Tips for Optimizing Your Website Performance",
      excerpt: "Learn how to improve your website speed and Core Web Vitals with these proven optimization techniques.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Performance",
    },
    {
      title: "Understanding SSL Certificates: A Complete Guide",
      excerpt: "Everything you need to know about SSL certificates, why they matter, and how to set them up.",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "Security",
    },
    {
      title: "Getting Started with WordPress on HostCloud",
      excerpt: "Step-by-step guide to installing and configuring WordPress on your HostCloud hosting.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Tutorial",
    },
    {
      title: "The Future of Web Hosting: Trends to Watch in 2025",
      excerpt: "Explore the latest trends and innovations shaping the web hosting industry this year.",
      date: "December 28, 2024",
      readTime: "10 min read",
      category: "Industry",
    },
    {
      title: "How to Choose the Right Hosting Plan for Your Business",
      excerpt: "A comprehensive guide to selecting the perfect hosting solution based on your needs.",
      date: "December 20, 2024",
      readTime: "7 min read",
      category: "Guide",
    },
    {
      title: "CDN Explained: Why Your Website Needs a Content Delivery Network",
      excerpt: "Discover how CDN can dramatically improve your website's performance and user experience.",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Performance",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Blog</h1>
              <p className="text-lg text-muted-foreground">
                Latest news, tutorials, and insights from the HostCloud team.
              </p>
            </div>

            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="group border-b border-border/40 pb-8 last:border-0 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium text-primary px-2 py-1 rounded bg-primary/10">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

