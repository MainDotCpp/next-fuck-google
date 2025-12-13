import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Zap, Check, Globe, BarChart } from "lucide-react"
import Link from "next/link"

export default function CdnPage() {
  const features = [
    "Global network of edge servers",
    "DDoS protection included",
    "Real-time analytics dashboard",
    "Automatic content optimization",
    "Image optimization and compression",
    "HTTP/2 and HTTP/3 support",
    "Custom cache rules",
    "Origin shield protection",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Content Delivery Network</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Accelerate your website with our global content delivery network.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Global Network</h3>
                <p className="text-sm text-muted-foreground">
                  Edge servers in 50+ locations worldwide for faster content delivery
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Performance Boost</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce load times and improve Core Web Vitals scores
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor performance and traffic with detailed analytics
                </p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">CDN Features</h2>
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
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

