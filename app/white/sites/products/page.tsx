import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Server, Globe, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      icon: Server,
      title: "Web Hosting",
      description: "High-performance hosting with 99.9% uptime guarantee. Perfect for websites of all sizes.",
      features: ["SSD Storage", "Daily Backups", "Free Migration"],
      link: "/white/sites/products/hosting",
    },
    {
      icon: Globe,
      title: "Domain Management",
      description: "Register and manage domains with ease. Over 400+ domain extensions available.",
      features: ["Domain Privacy", "DNS Management", "Easy Transfer"],
      link: "/white/sites/products/domains",
    },
    {
      icon: Shield,
      title: "SSL Certificates",
      description: "Secure your website with industry-standard SSL certificates. Free with all plans.",
      features: ["256-bit Encryption", "Auto-renewal", "Trust Seal"],
      link: "/white/sites/products/ssl",
    },
    {
      icon: Zap,
      title: "CDN",
      description: "Accelerate your website with our global content delivery network.",
      features: ["Global Network", "DDoS Protection", "Real-time Analytics"],
      link: "/white/sites/products/cdn",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, host, and scale your web presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <div
                key={product.title}
                className="border border-border/40 rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <product.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={product.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
