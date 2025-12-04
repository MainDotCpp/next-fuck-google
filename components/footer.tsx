import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/white/sites/products/hosting" className="hover:text-foreground transition-colors">
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="/white/sites/products/domains" className="hover:text-foreground transition-colors">
                  Domain Management
                </Link>
              </li>
              <li>
                <Link href="/white/sites/products/ssl" className="hover:text-foreground transition-colors">
                  SSL Certificates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/white/sites/solutions/enterprise" className="hover:text-foreground transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/white/sites/solutions/developers" className="hover:text-foreground transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/white/sites/solutions/ecommerce" className="hover:text-foreground transition-colors">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/white/sites/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/white/sites/docs/api" className="hover:text-foreground transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/white/sites/community" className="hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/white/sites/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/white/sites/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/white/sites/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 HostCloud. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/white/sites/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/white/sites/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/white/sites/cookies" className="hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
