"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, ArrowLeft, Copy, Check, Ship, Calendar, Users, Mail, Phone } from "lucide-react"
import { BookingSummary } from "@/components/booking-summary"

export default function EFTPaymentPage() {
  const [customerDetails, setCustomerDetails] = useState<any>(null)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [guests, setGuests] = useState<any>(null)
  const [copied, setCopied] = useState<string | null>(null)
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

  const bankDetails = {
    bankName: "Standard Bank",
    accountName: "Journey of Praise Cruise",
    accountNumber: "1234567890",
    branchCode: "051001",
    reference: `JOP-${customerDetails?.fullName?.replace(/\s/g, '').toUpperCase().substring(0, 10)}-${Date.now().toString().slice(-6)}`
  }

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

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  if (!customerDetails || !selectedPlan) {
    return (
      <main className="min-h-screen">
        <PageHeader
          badge="EFT Payment"
          title="Bank Transfer Details"
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
        badge="EFT Payment"
        title="Bank Transfer Details"
        subtitle="Complete your payment using the banking details below"
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

            {/* Bank Details */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6" />
                  <CardTitle className="font-['Cinzel'] text-xl">Banking Details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Bank Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Cormorant_Garamond']">{bankDetails.bankName}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.bankName, 'bankName')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'bankName' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Account Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Cormorant_Garamond']">{bankDetails.accountName}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.accountName, 'accountName')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'accountName' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Cormorant_Garamond'] font-mono">{bankDetails.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.accountNumber, 'accountNumber')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'accountNumber' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Branch Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Cormorant_Garamond'] font-mono">{bankDetails.branchCode}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.branchCode, 'branchCode')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'branchCode' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium font-['Cinzel']">Reference:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-['Cormorant_Garamond'] font-mono text-sm">{bankDetails.reference}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(bankDetails.reference, 'reference')}
                        className="h-8 w-8 p-0"
                      >
                        {copied === 'reference' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="font-bold font-['Cinzel'] text-lg">Amount to Pay:</span>
                      <span className="font-['Cinzel'] text-2xl text-primary font-bold">
                        R{totalAmount.toLocaleString('en-ZA')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-['Cinzel'] text-accent mb-2 font-semibold">Important Instructions</h4>
                  <ul className="text-sm text-foreground/80 space-y-2 font-['Cormorant_Garamond']">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Please use the reference number above when making your payment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Payment processing takes 2-3 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Once payment is received, you'll receive a confirmation email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>Keep your proof of payment for your records</span>
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
                    onClick={() => {
                      // Here you would typically send an email or save the payment details
                      alert('Payment details have been sent to your email. Please complete the transfer using the details above.')
                    }}
                    className="flex-1 font-['Cinzel']"
                  >
                    Send Details to Email
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
