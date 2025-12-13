import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Book, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getSiteName } from "@/lib/utils"

export default async function GuidesPage() {
  const siteName = await getSiteName()
  
  const guides = [
    {
      title: "Setting Up Your First Website",
      description: `Learn how to deploy your first website on ${siteName}`,
      category: "Basics",
      link: "#",
    },
    {
      title: "Configuring DNS Records",
      description: "Step-by-step guide to setting up DNS for your domain",
      category: "Domain",
      link: "#",
    },
    {
      title: "SSL Certificate Setup",
      description: "Enable HTTPS on your website with free SSL certificates",
      category: "Security",
      link: "#",
    },
    {
      title: "WordPress Installation",
      description: "Install and configure WordPress using our one-click installer",
      category: "CMS",
      link: "#",
    },
    {
      title: "Database Management",
      description: "Create and manage MySQL databases for your applications",
      category: "Database",
      link: "#",
    },
    {
      title: "Email Configuration",
      description: "Set up email accounts and configure email clients",
      category: "Email",
      link: "#",
    },
    {
      title: "Backup and Restore",
      description: "Automate backups and restore your website when needed",
      category: "Backup",
      link: "#",
    },
    {
      title: "Performance Optimization",
      description: "Optimize your website speed and improve Core Web Vitals",
      category: "Performance",
      link: "#",
    },
  ]

  const categories = ["All", "Basics", "Domain", "Security", "CMS", "Database", "Email", "Backup", "Performance"]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Guides & Tutorials</h1>
              <p className="text-lg text-muted-foreground">
                Step-by-step tutorials and best practices to help you get the most out of {siteName}.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-md border border-border/40 text-sm hover:border-primary/50 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide) => (
                <Link
                  key={guide.title}
                  href={guide.link}
                  className="group border border-border/40 rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Book className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary">{guide.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                      <div className="flex items-center text-sm text-primary group-hover:gap-2 transition-all">
                        Read guide
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

