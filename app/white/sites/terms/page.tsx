import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getSiteName, getDomain } from "@/lib/utils"

export default async function TermsPage() {
  const siteName = await getSiteName()
  const domain = await getDomain()
  
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-6">
                By accessing or using {siteName}'s services, you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                using our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily use {siteName}'s services for personal or commercial purposes. This
                license does not include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose without written consent</li>
                <li>Removing any copyright or proprietary notations</li>
                <li>Transferring the materials to another person</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Service Availability</h2>
              <p className="text-muted-foreground mb-6">
                We strive to maintain 99.9% uptime but do not guarantee uninterrupted or error-free service. We reserve
                the right to modify, suspend, or discontinue any part of our services at any time with or without
                notice.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Use our services only for lawful purposes</li>
                <li>Not engage in any activity that disrupts or interferes with our services</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services to host illegal or harmful content</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Payment Terms</h2>
              <p className="text-muted-foreground mb-6">
                All fees are due in advance. Refunds are provided according to our refund policy. We reserve the right
                to change our pricing with 30 days notice. Failure to pay may result in service suspension or
                termination.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6">
                {siteName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use or inability to use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                For questions about these Terms of Service, please contact us at{" "}
                <a href={`mailto:legal@${domain}`} className="text-primary hover:underline">
                  legal@{domain}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

