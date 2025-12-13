import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Server, Check, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function HostingPage() {
  const features = [
    "SSD Storage for faster performance",
    "99.9% Uptime SLA guarantee",
    "Daily automated backups",
    "Free SSL certificates",
    "Unlimited bandwidth",
    "24/7 expert support",
    "One-click app installer",
    "Free website migration",
    "cPanel control panel",
    "Email accounts included",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mx-auto mb-6">
                <Server className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Web Hosting</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                High-performance hosting with 99.9% uptime guarantee. Perfect for websites of all sizes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  SSD storage and optimized servers for maximum speed
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced security features and 99.9% uptime guarantee
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Easy Management</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive control panel and one-click installations
                </p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Features Included</h2>
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
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
              <div>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
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

