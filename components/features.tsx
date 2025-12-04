import { Card } from "@/components/ui/card"
import { Sparkles, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Faster Iteration",
    subtitle: "Collaboration",
    description: "A platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration.",
  },
  {
    icon: Users,
    title: "Smoother Team Collaboration",
    subtitle: "Collaboration",
    description: "Give your team and stakeholders the tools to share feedback and iterate faster.",
  },
  {
    icon: Sparkles,
    title: "More Innovation",
    subtitle: "Automation",
    description: "Focus on innovation, not configuration, with powerful automation tools. Let the platform handle complex infrastructure management.",
  },
]

export function Features() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Collaboration
            </div>
            <h2 className="text-4xl font-bold mb-6 text-balance">
              Faster Iteration.
              <br />
              More Innovation.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="bg-card border-border/40 p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
