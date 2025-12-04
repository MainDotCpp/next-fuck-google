import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-center">About HostCloud</h1>
            <p className="text-lg text-muted-foreground text-center mb-16">
              We're on a mission to make web hosting simple, reliable, and accessible for everyone.
            </p>

            <div className="prose prose-lg mx-auto mb-16">
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2020, HostCloud has grown from a small startup to a leading web hosting provider serving
                thousands of customers worldwide. Our commitment to innovation, reliability, and customer satisfaction
                has made us the trusted choice for developers and businesses alike.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">We put our customers at the heart of everything we do</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously improving our platform with cutting-edge technology
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">Committed to delivering the highest quality service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
