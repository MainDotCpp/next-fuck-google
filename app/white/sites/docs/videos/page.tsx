import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Play, Clock } from "lucide-react"

export default function VideosPage() {
  const videos = [
    {
      title: "Getting Started with HostCloud",
      description: "Learn the basics of HostCloud and deploy your first website",
      duration: "5:23",
      thumbnail: "Getting Started",
    },
    {
      title: "Domain Setup and DNS Configuration",
      description: "Complete guide to connecting your domain and configuring DNS",
      duration: "8:15",
      thumbnail: "Domain Setup",
    },
    {
      title: "WordPress Installation Tutorial",
      description: "Install WordPress in minutes using our one-click installer",
      duration: "6:42",
      thumbnail: "WordPress",
    },
    {
      title: "SSL Certificate Setup",
      description: "Enable HTTPS on your website with free SSL certificates",
      duration: "4:30",
      thumbnail: "SSL Setup",
    },
    {
      title: "Email Configuration Guide",
      description: "Set up email accounts and configure email clients",
      duration: "7:18",
      thumbnail: "Email Config",
    },
    {
      title: "Backup and Restore Process",
      description: "Learn how to backup and restore your website",
      duration: "5:55",
      thumbnail: "Backup",
    },
    {
      title: "Performance Optimization Tips",
      description: "Optimize your website speed and improve performance",
      duration: "9:12",
      thumbnail: "Performance",
    },
    {
      title: "API Integration Tutorial",
      description: "Integrate HostCloud API into your applications",
      duration: "11:30",
      thumbnail: "API",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Video Tutorials</h1>
              <p className="text-lg text-muted-foreground">
                Watch and learn from our comprehensive video library. Visual guides to help you master HostCloud.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.title}
                  className="group border border-border/40 rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/90 text-primary-foreground group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 ml-1" />
                      </div>
                    </div>
                    <div className="text-muted-foreground text-sm">{video.thumbnail}</div>
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-black/70 text-white text-xs">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

