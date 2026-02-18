"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Bed, Users, Wifi, Coffee, Tv, Ship, ArrowRight } from "lucide-react"

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
    description: "Wake up to beauty of sea",
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
      "✔ VIP gospel show access",
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
      "✔ VIP gospel show access",
      "✔ Backstage access to artists",
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

interface BookingCartProps {
  selectedPlan: any
  onPlanSelect: (plan: any) => void
  onContinue: () => void
  onGuestsChange: (guests: any) => void
}

export function BookingCart({ selectedPlan, onPlanSelect, onContinue, onGuestsChange }: BookingCartProps) {
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    childrenAges: [] as number[]
  })

  const calculateChildPrice = (age: number) => {
    if (age < 2) return 1000
    if (age < 5) return 1200
    if (age < 12) return 1500
    if (age < 18) return 2000
    return 0
  }

  const getTotalChildPrice = () => {
    return guests.childrenAges.reduce((total, age) => total + calculateChildPrice(age), 0)
  }

  // Update parent component when guests change
  const updateGuests = (newGuests: any) => {
    setGuests(newGuests)
    onGuestsChange(newGuests)
    // Save to localStorage for payment page
    localStorage.setItem('guests', JSON.stringify(newGuests))
  }

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
            1
          </div>
          <span className="font-['Cinzel'] text-lg">Select Cabin</span>
        </div>
        <div className="flex-1 h-px bg-border mx-4"></div>
        <div className="flex items-center space-x-4 opacity-50">
          <div className="w-8 h-8 bg-border text-muted-foreground rounded-full flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <span className="font-['Cinzel'] text-lg text-muted-foreground">Guest Details</span>
        </div>
      </div>

      {/* Guest Selection */}
      <Card className="border-2 border-border">
        <CardHeader>
          <CardTitle className="font-['Cinzel'] text-2xl">Number of Guests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Adults</label>
              <select 
                value={guests.adults}
                onChange={(e) => updateGuests({ 
                  ...guests, 
                  adults: parseInt(e.target.value) 
                })}
                className="w-full p-2 border border-border rounded-lg"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Children (under 18)</label>
              <select 
                value={guests.children}
                onChange={(e) => {
                  const newChildrenCount = parseInt(e.target.value)
                  updateGuests({ 
                    ...guests, 
                    children: newChildrenCount,
                    childrenAges: new Array(newChildrenCount).fill(0)
                  })
                }}
                className="w-full p-2 border border-border rounded-lg"
              >
                {[0, 1, 2, 3].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
          
          {guests.children > 0 && (
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Children's Ages (for pricing)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: guests.children }, (_, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium mb-2">
                      Child {index + 1} Age
                    </label>
                    <select
                      value={guests.childrenAges[index] || 0}
                      onChange={(e) => {
                        const newAges = [...guests.childrenAges]
                        newAges[index] = parseInt(e.target.value)
                        updateGuests({ ...guests, childrenAges: newAges })
                      }}
                      className="w-full p-2 border border-border rounded-lg"
                    >
                      <option value={0}>Select age</option>
                      {Array.from({ length: 18 }, (_, age) => (
                        <option key={age + 1} value={age + 1}>
                          {age + 1} {age + 1 === 1 ? 'year' : 'years'}
                        </option>
                      ))}
                    </select>
                    <div className="text-xs text-muted-foreground mt-1">
                      Insurance & taxes: R{calculateChildPrice(guests.childrenAges[index] || 0)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="bg-accent/10 rounded-lg p-4">
            <p className="text-sm text-foreground/80">
              <strong>Children Pricing:</strong> Kids travel free on cruise fare. 
              Insurance and port taxes apply based on age: 
              <span className="block mt-2">
                • Under 2 years: R1,000<br/>
                • 2-4 years: R1,200<br/>
                • 5-11 years: R1,500<br/>
                • 12-17 years: R2,000
              </span>
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Total guests: {guests.adults + guests.children}
            {guests.children > 0 && (
              <span className="block mt-1">
                Additional child costs: R{getTotalChildPrice()}
              </span>
            )}
            <span className="block mt-2 text-lg font-bold text-primary">
              Full Amount: R{parseInt(selectedPlan?.price?.replace(/[^\d]/g, '') || '0') + getTotalChildPrice()}
            </span>
          </p>
        </CardContent>
      </Card>

      {/* Cabin Selection */}
      <div>
        <h3 className="text-2xl font-['Cinzel'] font-bold mb-6">Choose Your Cabin</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {cabinTypes.map((cabin, index) => {
            const Icon = cabin.icon
            const isSelected = selectedPlan?.name === cabin.name
            
            return (
              <Card 
                key={index} 
                className={`border-2 transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? "border-accent shadow-xl scale-105" 
                    : "border-border hover:border-accent hover:shadow-xl"
                }`}
                onClick={() => onPlanSelect(cabin)}
              >
                <CardHeader className="relative">
                  {cabin.badge && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-2 border-primary font-['Cinzel'] px-4 py-1">
                      {cabin.badge}
                    </Badge>
                  )}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-['Cinzel'] text-center text-foreground leading-tight">
                    {cabin.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary font-['Cinzel'] mb-1">
                      {cabin.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {cabin.pricePerNight}
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Users className="w-4 h-4" />
                      <span>{cabin.capacity}</span>
                    </div>
                    <div className="text-sm text-foreground/70">
                      {cabin.size}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {cabin.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-xs leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {isSelected && (
                    <div className="text-center text-sm text-accent font-semibold">
                      ✓ Selected
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-end">
        <Button 
          onClick={onContinue}
          disabled={!selectedPlan}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-['Cinzel'] text-base px-8 py-3"
        >
          Continue to Guest Details
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}
