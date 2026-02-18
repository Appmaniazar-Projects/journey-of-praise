"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, Calendar, Users, Check } from "lucide-react"

interface BookingSummaryProps {
  selectedPlan: any
  guests?: {
    adults: number
    children: number
    childrenAges: number[]
  }
}

export function BookingSummary({ selectedPlan, guests }: BookingSummaryProps) {
  const calculateChildPrice = (age: number) => {
    if (age < 2) return 1000
    if (age < 5) return 1200
    if (age < 12) return 1500
    if (age < 18) return 2000
    return 0
  }

  const getTotalChildPrice = () => {
    if (!guests?.childrenAges) return 0
    return guests.childrenAges.reduce((total, age) => total + calculateChildPrice(age), 0)
  }
  if (!selectedPlan) {
    return (
      <Card className="border-2 border-border">
        <CardHeader>
          <CardTitle className="font-['Cinzel'] text-xl">Booking Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Ship className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="font-['Cormorant_Garamond']">No cabin selected yet</p>
            <p className="text-sm mt-2">Choose your cabin to see booking details</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-border sticky top-24">
      <CardHeader>
        <CardTitle className="font-['Cinzel'] text-xl">Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Selected Cabin */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Selected Cabin</span>
            {selectedPlan.badge && (
              <Badge variant="secondary" className="text-xs">
                {selectedPlan.badge}
              </Badge>
            )}
          </div>
          <div>
            <h4 className="font-semibold font-['Cinzel'] text-lg">{selectedPlan.name}</h4>
            <p className="text-sm text-muted-foreground font-['Cormorant_Garamond']">
              {selectedPlan.description}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">Cabin Price</span>
            <span className="font-['Cinzel'] text-xl text-primary">{selectedPlan.price}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            {selectedPlan.pricePerNight}
          </div>
          
          {guests?.children && guests.children > 0 && (
            <div className="mt-4 p-3 bg-accent/10 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Children's Insurance & Taxes</span>
                <span className="font-semibold text-accent">R{getTotalChildPrice()}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {guests.childrenAges.map((age, index) => (
                  <div key={index} className="flex justify-between">
                    <span>Child {index + 1} ({age} years):</span>
                    <span>R{calculateChildPrice(age)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total Cost</span>
              <span className="font-['Cinzel'] text-2xl text-primary">
                R{parseInt(selectedPlan.price.replace(/[^\d]/g, '')) + getTotalChildPrice()}
              </span>
            </div>
            <div className="mt-2 p-3 bg-primary/10 rounded-lg text-center">
              <div className="text-xl font-bold text-primary">
                Full Amount: R{parseInt(selectedPlan.price.replace(/[^\d]/g, '')) + getTotalChildPrice()}
              </div>
            </div>
          </div>
        </div>

        {/* Cabin Details */}
        <div className="space-y-3 border-t pt-4">
          <h5 className="font-semibold text-sm">Cabin Details</h5>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span>{selectedPlan.capacity}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Size: {selectedPlan.size}
            </div>
          </div>
        </div>

        {/* Included Features */}
        <div className="space-y-3 border-t pt-4">
          <h5 className="font-semibold text-sm">What's Included</h5>
          <div className="space-y-2">
            {selectedPlan.features.slice(0, 4).map((feature: string, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cruise Details */}
        <div className="space-y-3 border-t pt-4 bg-accent/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-accent" />
            <h5 className="font-semibold text-sm">Cruise Details</h5>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Dates:</span>
              <div className="font-medium">14-18 December 2026</div>
            </div>
            <div>
              <span className="text-muted-foreground">Ship:</span>
              <div className="font-medium">MSC Armonia</div>
            </div>
            <div>
              <span className="text-muted-foreground">Route:</span>
              <div className="font-medium">Durban → Pomene Island → Durban</div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
          <p className="font-['Cormorant_Garamond'] leading-relaxed">
            <strong>Important:</strong> All prices include cruise fare, insurance, port taxes, and access to Journey of Praise programmes. Payment details are being finalized with MSC Cruises.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
