import { Check } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      description: 'Perfect for personal projects and small websites',
      features: ['10 GB Storage', '100 GB Bandwidth', '1 Website', 'Free SSL Certificate', '24/7 Support'],
    },
    {
      name: 'Professional',
      price: '$29',
      description: 'Ideal for growing businesses and multiple projects',
      features: [
        '50 GB Storage',
        '500 GB Bandwidth',
        '5 Websites',
        'Free SSL Certificate',
        'Priority Support',
        'Daily Backups',
        'CDN Included',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'Advanced features for large-scale applications',
      features: [
        'Unlimited Storage',
        'Unlimited Bandwidth',
        'Unlimited Websites',
        'Free SSL Certificate',
        'Dedicated Support',
        'Hourly Backups',
        'CDN Included',
        'Advanced Security',
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`relative rounded-lg border p-8 ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
