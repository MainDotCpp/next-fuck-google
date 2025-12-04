import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Globe, Check, Lock, Settings } from "lucide-react"
import Link from "next/link"

export default function DomainsPage() {
  const features = [
    "400+ domain extensions available",
    "Domain privacy protection",
    "Easy DNS management",
    "Domain transfer assistance",
    "Auto-renewal options",
    "Domain locking for security",
    "Email forwarding included",
    "Subdomain management",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mx-auto mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Domain Management</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Register and manage domains with ease. Over 400+ domain extensions available.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Wide Selection</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from 400+ domain extensions including .com, .net, .org, and more
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Privacy Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Keep your personal information private with domain privacy
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Easy Management</h3>
                <p className="text-sm text-muted-foreground">
                  Simple DNS management and domain transfer tools
                </p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Domain Features</h2>
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
                <Link href="/white/sites/products">Browse All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

