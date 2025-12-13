import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Users, Zap, Check } from "lucide-react"
import Link from "next/link"

export default function EnterprisePage() {
  const features = [
    "Dedicated infrastructure and resources",
    "Advanced security and compliance (SOC 2, ISO 27001)",
    "24/7 dedicated support team",
    "Custom SLA guarantees",
    "White-label solutions",
    "Priority feature requests",
    "On-premise deployment options",
    "Advanced monitoring and analytics",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Enterprise Solutions</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scalable solutions designed for large organizations with advanced security and compliance requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced security features and compliance certifications to protect your data
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock support from our expert team dedicated to your success
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Custom Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored infrastructure and features to meet your specific business needs
                </p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Enterprise Features</h2>
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
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

