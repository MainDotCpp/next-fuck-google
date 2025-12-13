import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageSquare, Users, BookOpen, Github } from "lucide-react"
import Link from "next/link"
import { getSiteName } from "@/lib/utils"

export default async function CommunityPage() {
  const siteName = await getSiteName()
  
  const resources = [
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: `Join discussions, ask questions, and share knowledge with other ${siteName} users`,
      link: "#",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Contribute to open-source projects and access our developer resources",
      link: "#",
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Browse our comprehensive knowledge base with articles and tutorials",
      link: "#",
    },
    {
      icon: Users,
      title: "User Groups",
      description: "Connect with local user groups and attend meetups in your area",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Community</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our vibrant community of developers, designers, and website owners. Learn, share, and grow together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={resource.title}
                    href={resource.link}
                    className="group border border-border/40 rounded-lg p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </Link>
                )
              })}
            </div>

            <div className="border border-border/40 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for help, want to share your knowledge, or contribute to the community, we
                welcome you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs"
                  className="px-6 py-3 rounded-md border border-border/40 hover:border-primary/50 transition-colors"
                >
                  Read Documentation
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-md border border-border/40 hover:border-primary/50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

