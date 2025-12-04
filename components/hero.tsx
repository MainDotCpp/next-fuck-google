import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl mb-6">
            The Complete Platform
            <br />
            <span className="text-foreground/90">to Build Modern Websites</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
            Give your team the toolkit to stop configuring and start innovating. Build, deploy, and scale the best web
            experiences securely.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto group"
              asChild
            >
              <Link href="/white/sites/demo">
                Get a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border hover:bg-secondary bg-transparent"
              asChild
            >
              <Link href="/white/sites/products">
                <Play className="mr-2 h-4 w-4" />
                Explore Products
              </Link>
            </Button>
          </div>

          <div className="relative rounded-lg border border-border/40 bg-card p-1 shadow-2xl">
            <div className="aspect-video rounded-md bg-secondary/50 flex items-center justify-center overflow-hidden">
              <div className="text-muted-foreground text-sm">Platform Demo Preview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
