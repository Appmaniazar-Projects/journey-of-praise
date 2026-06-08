"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Image as ImageIcon, Video } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

// List of images in public/images — update if you add/remove files
const imageFiles = [
  "JOP_FlexiblePayments.webp",
  "JOP_FoodBar.webp",
  "JOP_GameArea2.webp",
  "JOP_GameArea.webp",
  "Aurea Suite.webp",
  "Balcony cabin.webp",
  "Interior Cabin.webp",
  "JOP_Community&Fellowship.webp",
  "JOP_Herosection.webp",
  "JOP_PraiseWorship.webp",
  "JOP_PremiumAmenities.webp",
  "JOP_Safe&Uplifting.webp",
  "JOP_ThanksGivingServices.webp",
  "Ocean View.webp",
  "JOP_PoolArea.webp",
  "JOP_TennisDeck.webp",
  "JOP_Shop.webp",
  "JOP_SpaArea.webp",

  
  
]

const galleryItems = imageFiles.map((filename) => ({
  type: "image",
  title: filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
  description: "",
  image: `/images/${filename}`,
}))

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openAt = (index: number) => setSelectedIndex(index)
  const close = () => setSelectedIndex(null)
  const prev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length))
  const next = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % galleryItems.length))

  return (
    <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-1 text-base font-['Cinzel']">
            <ImageIcon className="w-4 h-4 mr-2 inline" />
            Memories
          </Badge>
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-xl md:text-2xl text-foreground/75 max-w-3xl mx-auto font-['Cormorant_Garamond'] mb-8">
            Glimpse into the beauty of MSC Armonia and the worship, fellowship, and adventures that await you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              onClick={() => openAt(index)}
              className="border-2 border-border hover:border-accent transition-all duration-300 overflow-hidden group cursor-pointer h-full p-0 gap-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden h-full w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${encodeURI(item.image)}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <button className="absolute top-6 right-6 text-white p-3 rounded-full bg-black/30" onClick={close} aria-label="Close">✕</button>
            <button className="absolute left-6 p-3 rounded-full bg-black/30 text-white" onClick={prev} aria-label="Previous">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="max-w-[90%] max-h-[90%]">
              <img src={encodeURI(galleryItems[selectedIndex].image)} alt={galleryItems[selectedIndex].title} className="object-contain max-w-full max-h-full rounded-lg" />
            </div>
            <button className="absolute right-6 p-3 rounded-full bg-black/30 text-white" onClick={next} aria-label="Next">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/10 border-2 border-accent rounded-xl p-8 max-w-2xl">
            <Video className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-['Cinzel'] font-semibold text-foreground mb-3">Want to See More?</h3>
            <p className="text-foreground/75 font-['Cormorant_Garamond'] text-lg mb-6">Follow us on social media for daily updates, live worship streams, and testimonies from past voyages.</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="font-['Cinzel'] border-accent text-accent hover:bg-accent hover:text-accent-foreground">Facebook</Button>
              <Button variant="outline" className="font-['Cinzel'] border-accent text-accent hover:bg-accent hover:text-accent-foreground">Instagram</Button>
              <Button variant="outline" className="font-['Cinzel'] border-accent text-accent hover:bg-accent hover:text-accent-foreground">YouTube</Button>
            </div>
          </div>
        </div>

        {/* Experience the Journey Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <Badge className="bg-secondary text-secondary-foreground mb-4 px-4 py-1 text-base font-['Cinzel']">
              <Video className="w-4 h-4 mr-2 inline" />
              Video Experience
            </Badge>
            <h3 className="text-4xl md:text-5xl font-['Cinzel'] font-bold text-foreground mb-6">
              Experience the Journey
            </h3>
            <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond'] leading-relaxed max-w-4xl mx-auto">
              Step aboard our magnificent MSC cruise liner and discover a world where luxury meets faith. 
              From elegant dining venues and serene spa areas to vibrant entertainment spaces and comfortable 
              staterooms, every corner of our ship is designed to elevate your spiritual journey. 
              Experience the perfect blend of world-class amenities and soul-enriching fellowship.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/0owV5tqMVJA"
                  title="Journey of Praise Cruise"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
