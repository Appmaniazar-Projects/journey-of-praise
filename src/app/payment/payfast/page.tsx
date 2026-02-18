"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, ArrowLeft, Check, Ship, Calendar, Users, Mail, Phone, Lock } from "lucide-react"
import { BookingSummary } from "@/components/booking-summary"

export default function PayFastPaymentPage() {
  const [customerDetails, setCustomerDetails] = useState<any>(null)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [guests, setGuests] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Get customer details, selected plan, and guests from localStorage
    const savedDetails = localStorage.getItem('customerDetails')
    const savedPlan = localStorage.getItem('selectedPlan')
    const savedGuests = localStorage.getItem('guests')
    
    if (savedDetails) {
      try {
        setCustomerDetails(JSON.parse(savedDetails))
      } catch (e) {
        console.error('Error parsing customer details:', e)
      }
    }
    
    if (savedPlan) {
      try {
        setSelectedPlan(JSON.parse(savedPlan))
      } catch (e) {
        console.error('Error parsing selected plan:', e)
      }
    }
    
    if (savedGuests) {
      try {
        setGuests(JSON.parse(savedGuests))
      } catch (e) {
        console.error('Error parsing guests data:', e)
      }
    }
  }, [])

  // Calculate total amount including children's insurance
  const calculateChildPrice = (age: number) => {
    if (age < 2) return 1000
    if (age < 5) return 1200
    if (age < 12) return 1500
    if (age < 18) return 2000
    return 0
  }

  const getTotalChildPrice = () => {
    if (!guests?.childrenAges) return 0
    return guests.childrenAges.reduce((total: number, age: number) => total + calculateChildPrice(age), 0)
  }

  const totalAmount = selectedPlan 
    ? parseInt(selectedPlan.price.replace(/[^\d]/g, '')) + getTotalChildPrice()
    : 0

  const handlePayFastRedirect = () => {
    // Prepare PayFast payment data
    const paymentData = {
      merchant_id: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID || '10000100', // Demo merchant ID
      merchant_key: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY || '46f0cd694581a',
      return_url: `${window.location.origin}/payment/payfast/success`,
      cancel_url: `${window.location.origin}/payment/payfast/cancel`,
      notify_url: `${window.location.origin}/api/payfast/notify`,
      name_first: customerDetails?.fullName?.split(' ')[0] || '',
      name_last: customerDetails?.fullName?.split(' ').slice(1).join(' ') || '',
      email_address: customerDetails?.email || '',
      cell_number: customerDetails?.phone || '',
      m_payment_id: `JOP-${Date.now()}`,
      amount: totalAmount.toFixed(2), // PayFast expects amount in Rands as decimal string
      item_name: `Journey of Praise Cruise - ${selectedPlan?.name || 'Cabin Booking'}`,
    }

    // Save payment data to localStorage for reference
    localStorage.setItem('payfastPaymentData', JSON.stringify(paymentData))

    // In a real implementation, you would create a form and submit it to PayFast
    // For now, we'll show a message that this would redirect to PayFast
    // In production, you would create a hidden form and submit it, or use PayFast's API
    
    // For demo purposes, we'll show an alert
    // In production, uncomment the form submission code below
    
    alert(`This would redirect to PayFast payment gateway with the following details:
    
Amount: R${totalAmount.toLocaleString('en-ZA')}
Item: ${paymentData.item_name}
Customer: ${customerDetails?.fullName}
Email: ${customerDetails?.email}

In production, this would automatically redirect to PayFast's secure payment page.`)

    // Uncomment this in production to create and submit PayFast form:
    /*
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://www.payfast.co.za/eng/process'
    
    Object.keys(paymentData).forEach(key => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = paymentData[key]
      form.appendChild(input)
    })
    
    document.body.appendChild(form)
    form.submit()
    */
  }

  if (!customerDetails || !selectedPlan) {
    return (
      <main className="min-h-screen">
        <PageHeader
          badge="PayFast Payment"
          title="Secure Online Payment"
          subtitle="Please complete your booking details first"
        />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground font-['Cormorant_Garamond']">
                No booking details found. Please go back to complete your booking.
              </p>
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
        badge="PayFast Payment"
        title="Secure Online Payment"
        subtitle="Complete your payment securely through PayFast"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Back Button */}
            <Button 
              variant="ghost"
              onClick={() => router.push('/payment')}
              className="font-['Cinzel']"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Payment Options
            </Button>

            {/* Booking Summary */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="font-['Cinzel'] text-xl">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold font-['Cinzel'] mb-2">Guest Information</h4>
                    <div className="space-y-1 text-sm font-['Cormorant_Garamond']">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{customerDetails.fullName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{customerDetails.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{customerDetails.phone}</span>
                      </div>
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
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Details */}
            <Card className="border-2 border-accent">
              <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
                <div className="flex items-center gap-3">
                  <Lock className="w-6 h-6" />
                  <CardTitle className="font-['Cinzel'] text-xl">Payment Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel'] text-lg">Total Amount:</span>
                    <span className="font-['Cinzel'] text-3xl text-primary font-bold">
                      R{totalAmount.toLocaleString('en-ZA')}
                    </span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold font-['Cinzel'] mb-3">Payment Method</h4>
                    <div className="space-y-2 text-sm font-['Cormorant_Garamond']">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Credit Card (Visa, Mastercard, American Express)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Debit Card</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Instant EFT (via PayFast)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Mobicred</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-['Cinzel'] text-accent mb-2 font-semibold">Security & Privacy</h4>
                  <ul className="text-sm text-foreground/80 space-y-2 font-['Cormorant_Garamond']">
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Your payment is processed securely through PayFast's encrypted payment gateway</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>We do not store your credit card details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Payment is processed instantly and you'll receive immediate confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>You'll be redirected to PayFast's secure payment page</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => router.push('/payment')}
                    className="flex-1 font-['Cinzel']"
                  >
                    Change Payment Method
                  </Button>
                  <Button 
                    onClick={handlePayFastRedirect}
                    className="flex-1 font-['Cinzel'] bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proceed to PayFast
                  </Button>
                </div>
              </CardContent>
            </Card>
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
