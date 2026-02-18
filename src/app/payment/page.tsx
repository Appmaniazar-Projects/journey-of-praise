"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, Smartphone, Check, AlertCircle } from "lucide-react"
import Link from "next/link"

interface BookingData {
  selectedPlan: any
  guests: {
    adults: number
    children: number
    childrenAges: number[]
  }
  customerDetails: {
    fullName: string
    email: string
    phone: string
    country: string
    message: string
  }
}

export default function PaymentPage() {
  const [bookingData, setBookingData] = useState<BookingData | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<"eft" | "payfast" | null>(null)

  useEffect(() => {
    const savedPlan = localStorage.getItem('selectedPlan')
    const savedGuests = localStorage.getItem('guests')
    const savedCustomerDetails = localStorage.getItem('customerDetails')
    
    if (savedPlan && savedGuests) {
      setBookingData({
        selectedPlan: JSON.parse(savedPlan),
        guests: JSON.parse(savedGuests),
        customerDetails: savedCustomerDetails ? JSON.parse(savedCustomerDetails) : {
          fullName: '',
          email: '',
          phone: '',
          country: '',
          message: ''
        }
      })
    }
  }, [])

  const calculateChildPrice = (age: number) => {
    if (age < 2) return 1000
    if (age < 5) return 1200
    if (age < 12) return 1500
    if (age < 18) return 2000
    return 0
  }

  const getTotalChildPrice = () => {
    if (!bookingData?.guests?.childrenAges) return 0
    return bookingData.guests.childrenAges.reduce((total, age) => total + calculateChildPrice(age), 0)
  }

  const getTotalPrice = () => {
    if (!bookingData?.selectedPlan) return 0
    const cabinPrice = parseInt(bookingData.selectedPlan.price.replace(/[^\d]/g, ''))
    return cabinPrice + getTotalChildPrice()
  }

  const handlePayment = (method: "eft" | "payfast") => {
    setPaymentMethod(method)
    const amount = getTotalPrice()
    const bookingId = `JOP${Date.now()}`
    
    if (method === 'eft') {
      alert(`EFT Payment: R${amount}\nBank: Journey of Praise Cruises\nAccount: 123456789\nReference: ${bookingId}`)
    } else if (method === 'payfast') {
      alert(`Redirecting to PayFast with amount R${amount} for booking ${bookingId}`)
    }
  }

  if (!bookingData) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-['Cinzel'] mb-4">No Booking Data Found</h2>
            <p className="text-muted-foreground mb-6">
              Please complete your booking first before proceeding to payment.
            </p>
            <Link href="/book-now">
              <Button className="font-['Cinzel']">
                Return to Booking
              </Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <PageHeader
        badge="Secure Payment"
        title="Choose Payment Method"
        subtitle="Select your preferred payment option to complete your Journey of Praise booking."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Cinzel'] text-xl">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Selected Cabin</h4>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="font-['Cinzel'] text-lg">{bookingData.selectedPlan.name}</p>
                      <p className="text-sm text-muted-foreground">{bookingData.selectedPlan.description}</p>
                      {bookingData.selectedPlan.badge && (
                        <Badge className="mt-2">{bookingData.selectedPlan.badge}</Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Cost Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Cabin Price:</span>
                        <span className="font-semibold">{bookingData.selectedPlan.price}</span>
                      </div>
                      {bookingData.guests.children > 0 && (
                        <div className="flex justify-between">
                          <span>Children Costs:</span>
                          <span className="font-semibold">R{getTotalChildPrice()}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-primary text-xl">R{getTotalPrice()}</span>
                      </div>
                      <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">
                          Full Payment Amount: R{getTotalPrice()}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-['Cinzel'] text-xl">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      paymentMethod === 'eft' 
                        ? 'border-accent bg-accent/10' 
                        : 'border-border hover:border-accent/50'
                    }`}
                    onClick={() => handlePayment('eft')}>
                      <div className="flex items-center gap-3 mb-4">
                        <CreditCard className="w-8 h-8 text-accent" />
                        <h3 className="font-['Cinzel'] text-lg">EFT</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Direct bank transfer</p>
                      <Button className="w-full mt-4 font-['Cinzel']">
                        Pay R{getTotalPrice()} with EFT
                      </Button>
                    </div>

                    <div className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      paymentMethod === 'payfast' 
                        ? 'border-accent bg-accent/10' 
                        : 'border-border hover:border-accent/50'
                    }`}
                    onClick={() => handlePayment('payfast')}>
                      <div className="flex items-center gap-3 mb-4">
                        <Smartphone className="w-8 h-8 text-accent" />
                        <h3 className="font-['Cinzel'] text-lg">PayFast</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Instant online payment</p>
                      <Button className="w-full mt-4 font-['Cinzel']">
                        Pay R{getTotalPrice()} with PayFast
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Cinzel'] text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Contact Support</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> info@journeyofpraise.com</p>
                      <p><strong>Phone:</strong> +1 (234) 567-890</p>
                    </div>
                  </div>
                  <Link href="/book-now" className="block">
                    <Button variant="outline" className="w-full font-['Cinzel']">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Booking
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
