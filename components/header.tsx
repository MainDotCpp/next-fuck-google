import { Button } from "@/components/ui/button"
import { Server } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/white/sites" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
              <Server className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold tracking-tight">HostCloud</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/white/sites/products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="/white/sites/solutions"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/white/sites/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/white/sites/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <Link href="/white/sites/login">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/white/sites/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
