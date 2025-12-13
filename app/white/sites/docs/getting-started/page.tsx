import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { getSiteName } from "@/lib/utils"

export default async function GettingStartedPage() {
  const siteName = await getSiteName()
  
  const steps = [
    {
      title: "Create Your Account",
      description: `Sign up for a free ${siteName} account and verify your email address.`,
    },
    {
      title: "Choose Your Plan",
      description: "Select the hosting plan that best fits your needs. You can always upgrade later.",
    },
    {
      title: "Add Your Domain",
      description: `Connect your existing domain or register a new one through ${siteName}.`,
    },
    {
      title: "Deploy Your Website",
      description: "Upload your files via FTP, use Git, or deploy from your favorite platform.",
    },
    {
      title: "Configure SSL",
      description: "Enable free SSL certificate to secure your website with HTTPS.",
    },
    {
      title: "Go Live",
      description: "Your website is now live! Monitor performance and scale as needed.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Getting Started</h1>
              <p className="text-lg text-muted-foreground">
                Welcome to {siteName}! Follow this guide to get your website up and running in minutes.
              </p>
            </div>

            <div className="space-y-8 mb-12">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-border/40 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Quick Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Use our one-click installer for popular CMS platforms like WordPress, Drupal, and Joomla
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Enable automatic backups to protect your data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Check out our video tutorials for visual step-by-step guidance
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/videos">Watch Video Tutorials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

