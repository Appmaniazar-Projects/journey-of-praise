"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cruise Info", href: "/cruise" },
  { name: "Pricing", href: "/pricing" },
  { name: "Flights", href: "/flights" },
  { name: "Headliners", href: "/headliners" },
  { name: "Gallery", href: "/gallery" },
  { name: "Book Now", href: "/book-now", cta: true },
] as const

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-journy-1765981545433.png?width=8000&height=8000&resize=contain"
                alt="Journey of Praise"
                width={120}
                height={60}
                className="object-contain"
                priority
              />
            </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-['Cormorant_Garamond'] text-lg transition-colors ${
                  isActive(link.href)
                    ? "text-accent font-semibold bg-accent/10 px-4 py-2 rounded-lg"
                    : link.cta
                    ? "bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:bg-accent/90 font-semibold"
                    : "text-foreground hover:text-accent hover:bg-muted rounded-lg"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground hover:text-accent"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-['Cormorant_Garamond'] text-lg text-left py-2 px-4 transition-colors ${
                    isActive(link.href)
                      ? "text-accent font-semibold bg-accent/10 rounded-lg"
                      : link.cta
                      ? "bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-semibold"
                      : "text-foreground hover:text-accent hover:bg-muted rounded-lg"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
