"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { BookingCart } from "@/components/booking-cart"
import { BookingForm } from "@/components/booking-form"
import { BookingSummary } from "@/components/booking-summary"

interface CabinPlan {
  name: string
  price: string
  pricePerNight: string
  description: string
  icon: any
  features: string[]
  capacity: string
  size: string
  badge: string | null
}

export default function BookNowPage() {
  const [selectedPlan, setSelectedPlan] = useState<CabinPlan | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    childrenAges: [] as number[]
  })

  useEffect(() => {
    // Get plan from URL params or localStorage
    const urlParams = new URLSearchParams(window.location.search)
    const planParam = urlParams.get('plan')
    const savedPlan = localStorage.getItem('selectedPlan')
    
    if (planParam) {
      // Parse plan from URL
      const plans = [
        {
          name: "Fantastica – Interior Cabin",
          price: "R21 209",
          pricePerNight: "From",
          description: "Comfortable and value-driven for families",
          icon: "Bed",
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
          icon: "Ship",
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
          icon: "Coffee",
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
          icon: "Wifi",
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
      
      const plan = plans.find(p => p.name.toLowerCase().includes(planParam.toLowerCase()))
      if (plan) {
        setSelectedPlan(plan)
        localStorage.setItem('selectedPlan', JSON.stringify(plan))
      }
    } else if (savedPlan) {
      setSelectedPlan(JSON.parse(savedPlan))
    }
  }, [])

  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Secure Booking"
        title="Reserve Your Cabin"
        subtitle="Complete your Journey of Praise cruise booking in just a few simple steps."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {!showForm ? (
              <BookingCart 
                selectedPlan={selectedPlan}
                onPlanSelect={setSelectedPlan}
                onContinue={() => setShowForm(true)}
                onGuestsChange={setGuests}
              />
            ) : (
              <BookingForm 
                selectedPlan={selectedPlan}
                onBack={() => setShowForm(false)}
              />
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingSummary selectedPlan={selectedPlan} guests={guests} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
