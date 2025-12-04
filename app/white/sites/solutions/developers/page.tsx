import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Code, Terminal, GitBranch, Check } from "lucide-react"
import Link from "next/link"

export default function DevelopersPage() {
  const features = [
    "RESTful API with comprehensive documentation",
    "Git-based deployments",
    "CLI tools for local development",
    "Webhooks and event triggers",
    "Docker container support",
    "Environment variable management",
    "Automated testing integration",
    "Real-time logs and debugging",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Developer Solutions</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools and APIs designed for developers to build, deploy, and scale applications faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">RESTful API</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive API documentation and SDKs for all major languages
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">CLI Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Command-line tools for seamless local development and deployment
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <GitBranch className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Git Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Deploy directly from your Git repository with automatic builds
                </p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Developer Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/white/sites/docs/api">View API Documentation</Link>
              </Button>
              <div>
                <Button variant="outline" asChild>
                  <Link href="/white/sites/docs/getting-started">Get Started Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

