import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Cookie Settings</h1>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground mb-6">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
                clicking "Accept All", you consent to our use of cookies.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground mb-6">
                Cookies are small text files that are placed on your device when you visit a website. They help us
                provide you with a better experience by remembering your preferences and understanding how you use our
                site.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Types of Cookies We Use</h2>

              <div className="border border-border/40 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are necessary for the website to function properly. They enable core functionality such
                  as security, network management, and accessibility.
                </p>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="essential" checked disabled className="w-4 h-4" />
                  <label htmlFor="essential" className="text-sm text-muted-foreground">
                    Always Active
                  </label>
                </div>
              </div>

              <div className="border border-border/40 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously.
                </p>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="analytics" className="w-4 h-4" />
                  <label htmlFor="analytics" className="text-sm text-muted-foreground">
                    Allow Analytics Cookies
                  </label>
                </div>
              </div>

              <div className="border border-border/40 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are used to deliver personalized advertisements and track campaign performance.
                </p>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="marketing" className="w-4 h-4" />
                  <label htmlFor="marketing" className="text-sm text-muted-foreground">
                    Allow Marketing Cookies
                  </label>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground mb-6">
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies
                can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Accept All Cookies
              </Button>
              <Button size="lg" variant="outline">
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

