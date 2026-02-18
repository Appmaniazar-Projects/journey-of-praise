"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cruise Info", href: "/cruise" },
  { name: "Pricing", href: "/pricing" },
  { name: "Headliners", href: "/headliners" },
  { name: "Gallery", href: "/gallery" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative mt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link href="/" className="inline-block">
              <Image
                src="/JOP_Logo_Icon.png"
                alt="Journey of Praise"
                width={140}
                height={70}
                className="object-contain"
              />
            </Link>
            <p className="text-slate-300 leading-relaxed">
              A spiritual voyage where faith meets adventure. Join us for an unforgettable journey of praise, worship, and fellowship.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:text-slate-900" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:info@journeyofpraise.com" className="hover:text-accent transition-colors">
                  info@journeyofpraise.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <span>
                  Durban,<br />
                  South Africa
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold mb-6">Cruise Details</h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <strong className="text-white">Dates:</strong> December 14-18, 2025
              </li>
              <li>
                <strong className="text-white">Ship:</strong> MSC Armonia
              </li>
              <li>
                <strong className="text-white">Duration:</strong> 4 Nights
              </li>
              <li>
                <strong className="text-white">Ports:</strong> South Africa
              </li>
            </ul>
            <Link
              href="/book-now"
              className="mt-6 inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg font-semibold"
            >
              Book Your Cabin
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Journey of Praise. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
