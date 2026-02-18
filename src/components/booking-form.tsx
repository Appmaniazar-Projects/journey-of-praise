"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Calendar, Ship } from "lucide-react"
import { useRouter } from "next/navigation"

interface BookingFormProps {
  selectedPlan: any
  onBack: () => void
}

export function BookingForm({ selectedPlan, onBack }: BookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    adults: 2,
    children: 0,
    message: ""
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Save form data to localStorage
    localStorage.setItem('customerDetails', JSON.stringify(formData))
    
    // Redirect to payment page
    router.push('/payment')
  }

  return (
    <div id="enquire" className="max-w-4xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="p-2 h-8 w-8"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <span className="font-['Cinzel'] text-lg text-muted-foreground">Select Cabin</span>
          </div>
        </div>
        <div className="flex-1 h-px bg-border mx-4"></div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <span className="font-['Cinzel'] text-lg">Guest Details</span>
        </div>
      </div>

      <Card className="border-2 border-border shadow-2xl overflow-hidden">
        {/* Selected Plan Header */}
        {selectedPlan && (
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-['Cinzel'] font-bold">Guest Information</h3>
              {selectedPlan.badge && (
                <Badge className="bg-accent text-accent-foreground border-2 border-primary font-['Cinzel'] px-4 py-1">
                  {selectedPlan.badge}
                </Badge>
              )}
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
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
            <div className="mt-2 text-xl font-['Cinzel'] font-bold">
              {selectedPlan.price}
            </div>
          </div>
        )}
        
        <CardContent className="p-8">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Full Name *</label>
                <input 
                  className="w-full p-3 border rounded-md" 
                  placeholder="Enter your full name" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Email Address *</label>
                <input 
                  className="w-full p-3 border rounded-md" 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Phone Number *</label>
                <input 
                  className="w-full p-3 border rounded-md" 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Country</label>
                <input 
                  className="w-full p-3 border rounded-md" 
                  placeholder="Enter your country"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Number of Adults *</label>
                <select 
                  className="w-full p-3 border rounded-md bg-white"
                  value={formData.adults}
                  onChange={(e) => setFormData(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium font-['Cinzel']">Number of Children</label>
                <select 
                  className="w-full p-3 border rounded-md bg-white"
                  value={formData.children}
                  onChange={(e) => setFormData(prev => ({ ...prev, children: parseInt(e.target.value) }))}
                >
                  {[0, 1, 2, 3].map(num => (
                    <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium font-['Cinzel']">Special Requirements or Message</label>
              <textarea 
                className="w-full p-3 border rounded-md h-24" 
                placeholder="Tell us about any special requirements, dietary needs, or questions you may have..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>

            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <h4 className="font-['Cinzel'] text-accent mb-2">Important Information</h4>
              <ul className="text-sm text-foreground/80 space-y-1 font-['Cormorant_Garamond']">
                <li>• All prices include cruise fare, insurance, and port taxes</li>
                <li>• Payment details are being finalized with MSC Cruises</li>
                <li>• You will receive a confirmation email with next steps</li>
                <li>• Journey of Praise programmes are included in all cabins</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button 
                type="button"
                variant="outline"
                onClick={onBack}
                className="flex-1 py-3 font-['Cinzel']"
              >
                Back to Cabin Selection
              </Button>
              <Button 
                id="enquire-form-button" 
                className="flex-1 py-3 font-['Cinzel']" 
                type="submit"
              >
                Proceed to Payment
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
