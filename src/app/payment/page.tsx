"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Building2, ArrowRight, Check, Ship, Calendar, Users } from "lucide-react"
import { BookingSummary } from "@/components/booking-summary"

export default function PaymentPage() {
  const [customerDetails, setCustomerDetails] = useState<any>(null)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [guests, setGuests] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Get customer details, selected plan, and guests from localStorage
    const savedDetails = localStorage.getItem('customerDetails')
    const savedPlan = localStorage.getItem('selectedPlan')
    const savedGuests = localStorage.getItem('guests')
    
    if (savedDetails) {
      try {
        const parsed = JSON.parse(savedDetails)
        setCustomerDetails(parsed)
      } catch (e) {
        console.error('Error parsing customer details:', e)
      }
    }
    
    if (savedPlan) {
      try {
        const parsed = JSON.parse(savedPlan)
        setSelectedPlan(parsed)
      } catch (e) {
        console.error('Error parsing selected plan:', e)
      }
    }
    
    if (savedGuests) {
      try {
        const parsed = JSON.parse(savedGuests)
        setGuests(parsed)
      } catch (e) {
        console.error('Error parsing guests data:', e)
      }
    }
    
    setIsLoading(false)
  }, [])

  const handlePaymentOption = (option: 'eft' | 'payfast') => {
    // Save payment method choice
    localStorage.setItem('paymentMethod', option)
    
    // Redirect to the selected payment option page
    router.push(`/payment/${option}`)
  }

  // Show loading state while checking localStorage
  if (isLoading) {
    return (
      <main className="min-h-screen">
        <PageHeader
          badge="Payment"
          title="Select Payment Method"
          subtitle="Loading your booking details..."
        />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground font-['Cormorant_Garamond']">
                Loading...
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  // Show error if data is missing
  if (!customerDetails || !selectedPlan) {
    return (
      <main className="min-h-screen">
        <PageHeader
          badge="Payment"
          title="Select Payment Method"
          subtitle="Please complete your booking details first"
        />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground font-['Cormorant_Garamond'] mb-4">
                No booking details found. Please go back to complete your booking.
              </p>
              <div className="text-xs text-muted-foreground mb-4 space-y-1">
                {!customerDetails && <p>Missing: Customer details</p>}
                {!selectedPlan && <p>Missing: Selected plan</p>}
              </div>
              <Button 
                onClick={() => router.push('/book-now')}
                className="mt-4 font-['Cinzel']"
              >
                Go to Booking Page
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Payment"
        title="Select Payment Method"
        subtitle="Choose your preferred payment option to complete your booking"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Summary Card */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="font-['Cinzel'] text-xl">Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold font-['Cinzel'] mb-2">Guest Information</h4>
                    <div className="space-y-1 text-sm font-['Cormorant_Garamond']">
                      <p><strong>Name:</strong> {customerDetails.fullName}</p>
                      <p><strong>Email:</strong> {customerDetails.email}</p>
                      <p><strong>Phone:</strong> {customerDetails.phone}</p>
                      <p><strong>Adults:</strong> {customerDetails.adults}</p>
                      {customerDetails.children > 0 && (
                        <p><strong>Children:</strong> {customerDetails.children}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold font-['Cinzel'] mb-2">Cabin Details</h4>
                    <div className="space-y-1 text-sm font-['Cormorant_Garamond']">
                      <div className="flex items-center gap-2">
                        <Ship className="w-4 h-4" />
                        <span>{selectedPlan.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{selectedPlan.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>14-18 Dec 2026</span>
                      </div>
                      {selectedPlan.badge && (
                        <Badge variant="secondary" className="mt-2">
                          {selectedPlan.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Options */}
            <div>
              <h2 className="text-2xl font-['Cinzel'] font-bold mb-6">Choose Payment Method</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* EFT Option */}
                <Card className="border-2 border-border hover:border-accent transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <CardTitle className="font-['Cinzel'] text-xl">EFT Payment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground font-['Cormorant_Garamond']">
                      Make a direct bank transfer. You'll receive banking details after selecting this option.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Secure bank transfer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>No additional fees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Processing within 2-3 business days</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handlePaymentOption('eft')}
                      className="w-full font-['Cinzel'] mt-4"
                    >
                      Select EFT Payment
                    </Button>
                  </CardContent>
                </Card>

                {/* PayFast Option */}
                <Card className="border-2 border-accent shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-2 border-primary font-['Cinzel'] px-4 py-1">
                    Popular
                  </Badge>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-accent" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <CardTitle className="font-['Cinzel'] text-xl">PayFast</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground font-['Cormorant_Garamond']">
                      Pay securely online using credit card, debit card, or instant EFT through PayFast.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Instant payment processing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Multiple payment methods</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Secure and encrypted</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handlePaymentOption('payfast')}
                      className="w-full font-['Cinzel'] mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Select PayFast Payment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
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
