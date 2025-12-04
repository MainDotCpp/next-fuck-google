import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Check, Lock, Award } from "lucide-react"
import Link from "next/link"

export default function SslPage() {
  const features = [
    "256-bit encryption",
    "Free with all hosting plans",
    "Automatic renewal",
    "Trust seal included",
    "Wildcard SSL support",
    "Multi-domain certificates",
    "Instant activation",
    "Browser compatibility",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">SSL Certificates</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Secure your website with industry-standard SSL certificates. Free with all plans.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Strong Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  256-bit encryption to protect your data and user information
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Trust Seal</h3>
                <p className="text-sm text-muted-foreground">
                  Display trust indicators to increase customer confidence
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Auto-Renewal</h3>
                <p className="text-sm text-muted-foreground">
                  Automatic certificate renewal to ensure continuous protection
                </p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">SSL Features</h2>
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
                <Link href="/white/sites/pricing">View Hosting Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

