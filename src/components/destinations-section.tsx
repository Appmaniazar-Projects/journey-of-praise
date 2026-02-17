"use client"

import { motion } from "framer-motion"
import { Ship, Anchor, Waves, Utensils, Music, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DestinationsSection() {
  const cruiseFeatures = [
    {
      name: "Luxury Spa & Wellness",
      description:
        "Rejuvenate your body and soul in our world-class spa facilities. Experience divine relaxation with premium treatments and serene ocean views.",
      highlights: ["Thalassotherapy Pool", "Massage Therapy", "Sauna & Steam", "Beauty Salon"],
      image: "/images/JOP_SpaArea.jpg",
      icon: Heart,
    },
    {
      name: "Gourmet Dining Experience",
      description:
        "Savor exquisite cuisine in our elegant restaurants. From international buffets to fine dining, every meal is a celebration of taste and fellowship.",
      highlights: ["24-Hour Room Service", "Specialty Restaurants", "Wine Bar", "Themed Dinners"],
      image: "/images/JOP_FoodBar.jpg",
      icon: Utensils,
    },
    {
      name: "Premium Entertainment",
      description:
        "Be inspired by world-class gospel performances and entertainment. Our main theatre hosts uplifting shows that touch the heart and spirit.",
      highlights: ["Gospel Concerts", "Live Theatre", "Youth Programs", "Worship Sessions"],
      image: "/images/JOP_Praise$Worship.jpg",
      icon: Music,
    },
    {
      name: "Ocean View Suites",
      description:
        "Retreat to your private sanctuary at sea. Our elegantly appointed cabins offer comfort, style, and breathtaking ocean views for perfect rest.",
      highlights: ["Balcony Cabins", "Ocean Views", "Premium Amenities", "24/7 Service"],
      image: "/images/JOP_SpaArea.jpg",
      icon: Ship,
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Cruise Features Highlights
          </h2>
          <p className="text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto font-['Cormorant_Garamond']">
            Experience the best of MSC Armonia's world-class amenities combined with faith-filled fellowship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cruiseFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="overflow-hidden border-2 border-border hover:border-accent transition-all duration-300 h-full group hover:shadow-2xl rounded-lg">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2">
                    <feature.icon className="w-6 h-6 text-accent" />
                    <h3 className="text-3xl font-['Cinzel'] font-bold text-white">
                      {feature.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80 leading-relaxed font-['Cormorant_Garamond'] text-lg mb-4">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        variant="secondary"
                        className="bg-secondary/15 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-['Cormorant_Garamond'] text-base px-3 py-1"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
