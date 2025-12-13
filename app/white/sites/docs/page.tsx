import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Book, Code, FileText, Video } from "lucide-react"
import Link from "next/link"
import { getSiteName } from "@/lib/utils"

export default async function DocsPage() {
  const siteName = await getSiteName()
  
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics and set up your first website",
      link: "/docs/getting-started",
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation for developers",
      link: "/docs/api",
    },
    {
      icon: FileText,
      title: "Guides",
      description: "Step-by-step tutorials and best practices",
      link: "/docs/guides",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch and learn from our video library",
      link: "/docs/videos",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about using {siteName}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.link}
                className="group border border-border/40 rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
