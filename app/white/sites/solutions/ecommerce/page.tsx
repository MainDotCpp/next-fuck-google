import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShoppingBag, CreditCard, TrendingUp, Check } from "lucide-react"
import Link from "next/link"

export default function EcommercePage() {
  const features = [
    "Optimized for high traffic and sales volumes",
    "Seamless payment gateway integration",
    "SSL certificates included",
    "Advanced caching and CDN",
    "Shopping cart optimization",
    "Inventory management integration",
    "Real-time analytics dashboard",
    "Mobile-optimized performance",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">E-commerce Solutions</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                High-performance hosting optimized for online stores with seamless payment integration and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Store Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized infrastructure for fast page loads and smooth shopping experiences
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Payment Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Secure payment processing with support for all major payment gateways
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Scalability</h3>
                <p className="text-sm text-muted-foreground">
                  Auto-scaling to handle traffic spikes during sales and promotions
                </p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">E-commerce Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
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

