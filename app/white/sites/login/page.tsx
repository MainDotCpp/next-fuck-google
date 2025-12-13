import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getSiteName } from "@/lib/utils"

export default async function LoginPage() {
  const siteName = await getSiteName()
  
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Sign In</h1>
              <p className="text-muted-foreground">Welcome back to {siteName}</p>
            </div>

            <div className="border border-border/40 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-medium">
                      Password
                    </label>
                    <Link href="/white/sites/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/white/sites/signup" className="text-primary hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

