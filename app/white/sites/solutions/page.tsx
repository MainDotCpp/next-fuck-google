import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Building2, Code, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise",
      description: "Scalable solutions for large organizations with advanced security and compliance requirements.",
      link: "/white/sites/solutions/enterprise",
    },
    {
      icon: Code,
      title: "Developers",
      description: "Powerful tools and APIs for developers to build, deploy, and scale applications faster.",
      link: "/white/sites/solutions/developers",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "High-performance hosting optimized for online stores with seamless payment integration.",
      link: "/white/sites/solutions/ecommerce",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Solutions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for every business need. Find the perfect fit for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <div
                  key={solution.title}
                  className="border border-border/40 rounded-lg p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={solution.link}>Learn More</Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

