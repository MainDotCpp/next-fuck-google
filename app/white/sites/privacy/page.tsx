import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getSiteName, getDomain } from "@/lib/utils"

export default async function PrivacyPage() {
  const siteName = await getSiteName()
  const domain = await getDomain()
  
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">Last updated: January 1, 2025</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                {siteName} ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our hosting services and
                website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect information that you provide directly to us:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Account registration information (name, email address, phone number)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Support communications and service requests</li>
                <li>Website content and data you host on our servers</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze usage patterns</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href={`mailto:privacy@${domain}`} className="text-primary hover:underline">
                  privacy@{domain}
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

