import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Phone } from "lucide-react"
import { getDomain } from "@/lib/utils"

export default async function ContactPage() {
  const domain = await getDomain()
  
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-center">Contact Us</h1>
            <p className="text-lg text-muted-foreground text-center mb-16">
              Have questions? We're here to help. Reach out to our team anytime.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">support@{domain}</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </div>

            <div className="border border-border/40 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
