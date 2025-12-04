import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Code, Key, Book } from "lucide-react"
import Link from "next/link"

export default function ApiPage() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/servers",
      description: "List all servers",
    },
    {
      method: "POST",
      path: "/api/v1/servers",
      description: "Create a new server",
    },
    {
      method: "GET",
      path: "/api/v1/servers/{id}",
      description: "Get server details",
    },
    {
      method: "PUT",
      path: "/api/v1/servers/{id}",
      description: "Update server configuration",
    },
    {
      method: "DELETE",
      path: "/api/v1/servers/{id}",
      description: "Delete a server",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">API Reference</h1>
              <p className="text-lg text-muted-foreground">
                Complete API documentation for developers. Integrate HostCloud into your applications with our RESTful API.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Key className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Use API keys or OAuth 2.0 for secure authentication
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">RESTful API</h3>
                <p className="text-sm text-muted-foreground">
                  Standard HTTP methods and JSON responses
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Book className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guides and code examples
                </p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">API Endpoints</h2>
              <div className="space-y-4">
                {endpoints.map((endpoint) => (
                  <div key={endpoint.path} className="border-b border-border/40 pb-4 last:border-0">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="px-3 py-1 rounded text-xs font-mono font-semibold bg-primary/10 text-primary">
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                    </div>
                    <p className="text-sm text-muted-foreground ml-20">{endpoint.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8 bg-secondary/30">
              <h3 className="font-semibold mb-2">Base URL</h3>
              <code className="text-sm font-mono text-muted-foreground">https://api.hostcloud.com</code>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/white/sites/docs/guides">View Guides</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/white/sites/solutions/developers">Developer Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

