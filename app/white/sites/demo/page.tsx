import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play, Check } from "lucide-react"
import Link from "next/link"
import { getSiteName } from "@/lib/utils"

export default async function DemoPage() {
  const siteName = await getSiteName()
  
  const features = [
    "Real-time performance monitoring",
    "Automated scaling and optimization",
    "Advanced security features",
    "Global CDN integration",
    "One-click deployments",
    "24/7 expert support",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Platform Demo</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See {siteName} in action. Experience the power of our platform with an interactive demonstration.
              </p>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-12">
              <div className="aspect-video rounded-md bg-secondary/50 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <Play className="h-8 w-8" />
                  </div>
                  <p className="text-muted-foreground">Demo Video Player</p>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/white/sites/signup">Start Free Trial</Link>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">Want to see more?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="/white/sites/products">Explore Products</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/white/sites/contact">Contact Sales</Link>
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

