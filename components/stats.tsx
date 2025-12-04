import { Card } from "@/components/ui/card"

const stats = [
  {
    metric: "20 Days Saved",
    description: "Daily Build Time",
    company: "NETFLIX",
  },
  {
    metric: "98% Faster",
    description: "Time to Market",
    company: "TRIPADVISOR",
  },
  {
    metric: "300% Improvement",
    description: "SEO Performance",
    company: "BOX",
  },
  {
    metric: "6x Faster",
    description: "Build & Deploy",
    company: "EBAY",
  },
]

export function Stats() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.company} className="bg-card border-border/40 p-6 hover:border-primary/50 transition-colors">
              <div className="space-y-3">
                <div className="text-2xl font-bold text-balance">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
                <div className="text-xs font-semibold tracking-wider text-muted-foreground/80">{stat.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
