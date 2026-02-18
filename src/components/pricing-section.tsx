"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Bed, Users, Wifi, Coffee, Tv, Ship } from "lucide-react"

const cabinTypes = [
  {
    name: "Fantastica – Interior Cabin",
    price: "R21 209",
    pricePerNight: "From",
    description: "Comfortable and value-driven for families",
    icon: Bed,
    features: [
      "Twin beds (convertible to queen)",
      "Private bathroom",
      "Climate control",
      "TV with entertainment",
      "Safe",
      "All Journey of Praise programmes",
      "Insurance & port charges",
      "Complimentary dining & daily fine dining",
      "Fitness facilities, pools & hot tubs",
      "Worded worship sessions & teen entertainment",
      "Selected sporting activities",
      "Room service"
    ],
    capacity: "2-4 guests",
    size: "approx. 13-20 sq m",
    badge: null
  },
  {
    name: "Fantastica – Premium Ocean View",
    price: "R23 673",
    pricePerNight: "From",
    description: "Wake up to the beauty of the sea",
    icon: Ship,
    features: [
      "All Interior Cabin amenities",
      "Window with sea view",
      "Sitting area",
      "Mini refrigerator",
      "All Journey of Praise programmes",
      "Insurance & port charges",
      "Complimentary dining & daily fine dining",
      "Fitness facilities, pools & hot tubs",
      "Worded worship sessions & teen entertainment",
      "Selected sporting activities",
      "Room service"
    ],
    capacity: "2-4 guests",
    size: "approx. 12-20 sq m",
    badge: "Popular"
  },
  {
    name: "Fantastica – Junior Balcony",
    price: "R30 736",
    pricePerNight: "Decks 9–10",
    description: "A private outdoor space for reflection and rest",
    icon: Coffee,
    features: [
      "Private balcony",
      "All Fantastica amenities",
      "VIP gospel show access",
      "All Journey of Praise programmes",
      "Insurance & port charges",
      "Complimentary dining & daily fine dining",
      "Fitness facilities, pools & hot tubs",
      "Worded worship sessions & teen entertainment",
      "Selected sporting activities",
      "Room service"
    ],
    capacity: "2-4 guests",
    size: "approx. 13-17 sq m + balcony",
    badge: "Most Choice"
  },
  {
    name: "Aurea – Balcony Suite",
    price: "R33 753",
    pricePerNight: "Deck 12",
    description: "Premium comfort with exclusive experiences",
    icon: Wifi,
    features: [
      "Premium balcony cabin",
      "All Fantastica amenities",
      "VIP gospel show access",
      "Backstage access to artists",
      "All Journey of Praise programmes",
      "Insurance & port charges",
      "Complimentary dining & daily fine dining",
      "Fitness facilities, pools & hot tubs",
      "Worded worship sessions & teen entertainment",
      "Selected sporting activities",
      "Room service"
    ],
    capacity: "2-4 guests",
    size: "approx. 13-17 sq m + balcony",
    badge: "Premium"
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Cabin Options & Pricing
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond']">
              Whether you’re travelling as a couple, a family, or part of a group, there’s a cabin designed for your comfort.
            </p>
            <p className="text-lg text-primary font-semibold font-['Cinzel']">
              All prices include cruise fare, insurance, port taxes, and access to Journey of Praise programmes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cabinTypes.map((cabin, index) => (
            <Card 
              key={index} 
              className={`border-2 transition-all duration-300 h-full flex flex-col ${
                cabin.badge === "Premium" 
                  ? "border-accent shadow-xl scale-105" 
                  : "border-border hover:border-accent hover:shadow-xl"
              }`}
            >
              <CardHeader className="relative">
                {cabin.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-2 border-primary font-['Cinzel'] px-4 py-1">
                    {cabin.badge}
                  </Badge>
                )}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4">
                  <cabin.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-['Cinzel'] text-center text-foreground leading-tight">
                  {cabin.name}
                </CardTitle>
                <CardDescription className="text-center font-['Cormorant_Garamond'] text-base mt-2">
                  {cabin.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary font-['Cinzel'] mb-1">
                    {cabin.price}
                  </div>
                  <div className="text-sm text-muted-foreground font-['Cormorant_Garamond']">
                    {cabin.pricePerNight}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 px-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <Users className="w-4 h-4" />
                    <span className="font-['Cormorant_Garamond']">{cabin.capacity}</span>
                  </div>
                  <div className="text-sm text-foreground/70 font-['Cormorant_Garamond']">
                    {cabin.size}
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  {cabin.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm font-['Cormorant_Garamond'] leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                  <Link href={`/book-now?plan=${encodeURIComponent(cabin.name.toLowerCase().replace(/\s+/g, '-'))}`} className="w-full">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-['Cinzel'] text-base mt-auto"
                    >
                      Book Now
                    </Button>
                  </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto space-y-4">
          <p className="text-foreground/60 font-['Cormorant_Garamond'] text-lg">
            * All prices include cruise fare, insurance, port taxes, and access to Journey of Praise programmes.
          </p>
          <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
            <h4 className="text-xl font-['Cinzel'] text-accent mb-2">Children's Pricing</h4>
            <p className="text-foreground/80 font-['Cormorant_Garamond'] text-lg mb-2">
              Kids travel free on the cruise fare, however insurance and port taxes charges still apply.
            </p>
            <p className="text-foreground/70 font-['Cormorant_Garamond'] text-base">
              Insurance and port taxes for children range from <strong>R1,000 to R2,000</strong> depending on the age of the child.
            </p>
          </div>
          <div className="p-6 bg-muted/50 rounded-xl border border-border">
            <h4 className="text-xl font-['Cinzel'] text-foreground mb-2">Important Note on Bookings</h4>
            <p className="text-foreground/80 font-['Cormorant_Garamond'] text-lg">
              Payment details are still being finalised with MSC. Please reserve your cabin to be notified as soon as payment plans are active.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
