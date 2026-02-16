"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Ship, Anchor, Clock, Info, Users, Music, Heart, Sparkles } from "lucide-react"

const itinerary = [
  {
    day: "Monday ",
    date: "14 December 2026",
    port: "Durban",
    arrival: "—",
    departure: "16:00",
    activities: [
      "6:00AM - 11:00AM: Slow morning (breakfast)",
      "11:00AM - 1:00PM: Explore cruise sites (pools, waterpark, spa, entertainment, teens club, bowling, kids' club, 4D cinema, Legoland, shopping, gym)",
      "12:00PM - 4:00PM: Lunch",
      "2:00PM - 3:00PM: Word session with guest Pastor (main theatre)",
      "2:00PM - 3:00PM: Youth Word session with guest Pastor (conference room)",
      "5:30PM - 8:00PM: Dinner",
      "8:00PM - 12:00AM: Worship session Guest Artist (main theatre)"
    ]
  },
  {
    day: "Tuesday ",
    date: "15 December 2026",
    port: "At Sea",
    arrival: "—",
    departure: "—",
    activities: [
      "6:00AM - 11:00AM: Slow morning (breakfast)",
      "11:00AM - 1:00PM: Explore cruise sites (pools, waterpark, spa, entertainment, teens club, bowling, kids' club, 4D cinema, Legoland, shopping, gym)",
      "12:00PM - 4:00PM: Lunch",
      "2:00PM - 3:00PM: Word session with guest Pastor (main theatre)",
      "2:00PM - 3:00PM: Youth Word session with guest Pastor (conference room)",
      "5:30PM - 8:00PM: Dinner",
      "8:00PM - 12:00AM: Worship session Guest Artist (main theatre)"
    ]
  },
  {
    day: "Wednesday - Pomene, Mozambique",
    date: "16 December 2026",
    port: "Pomene Island, Mozambique",
    arrival: "08:00",
    departure: "18:00",
    activities: [
      "Optional Island Visit: 8am - 6pm (arranged through MSC Cruises)",
      "6:00AM - 11:00AM: Slow morning (breakfast)",
      "11:00AM - 1:00PM: Explore cruise sites (pools, waterpark, spa, entertainment, teens club, bowling, kids' club, 4D cinema, Legoland, shopping, gym)",
      "12:00PM - 4:00PM: Lunch",
      "2:00PM - 3:00PM: Word session with guest Pastor (main theatre)",
      "2:00PM - 3:00PM: Youth Word session with guest Pastor (conference room)",
      "5:30PM - 8:00PM: Dinner",
      "8:00PM - 12:00AM: Worship session Guest Artist (main theatre)"
    ]
  },
  {
    day: "Thursday - Rejoice Theme",
    date: "17 December 2026",
    port: "At Sea",
    arrival: "—",
    departure: "—",
    activities: [
      "6:00AM - 11:00AM: Slow morning (breakfast)",
      "11:00AM - 1:00PM: Explore cruise sites (pools, waterpark, spa, entertainment, teens club, bowling, kids' club, 4D cinema, Legoland, shopping, gym)",
      "12:00PM - 4:00PM: Lunch",
      "2:00PM - 3:00PM: Word session with guest Pastor (main theatre)",
      "2:00PM - 3:00PM: Youth Word session with guest Pastor (conference room)",
      "5:30PM - 8:00PM: Dinner",
      "8:00PM - 1:00AM: Worship session Guest Artist (main theatre)"
    ]
  },
  {
    day: "Friday - Back in SA",
    date: "18 December 2026",
    port: "Durban",
    arrival: "06:00",
    departure: "—",
    activities: [
    
      "Disembarkation",
      "Journey home with a renewed spirit"
    ]
  }
]

const shipFeatures = [
  {
    icon: Ship,
    title: "MSC Armonia",
    description: "Elegant and magnificent vessel chosen for rest and joy"
  },
  {
    icon: Anchor,
    title: "Mozambique Journey",
    description: "Unforgettable 4-night voyage to Pomene Island"
  },
  {
    icon: Clock,
    title: "20h Dining",
    description: "Complimentary dining options open up to 20 hours daily"
  }
]

export function CruiseInfoSection() {
  return (
    <section id="cruise-info" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary text-primary-foreground mb-4 px-4 py-1 text-base font-['Cinzel']">
            <Ship className="w-4 h-4 mr-2 inline" />
            Faith at Sea
          </Badge>
          <h2 className="text-5xl md:text-6xl font-['Cinzel'] font-bold text-foreground mb-6">
            Faith at Sea. Comfort All Around.
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-foreground/75 font-['Cormorant_Garamond'] leading-relaxed">
              Journey of Praise Cruise combines the warmth of worship with the comfort of a world-class cruise experience. Join us aboard the magnificent MSC Armonia for an unforgettable 4-night Mozambique Island journey of faith, fellowship, and inspiration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-lg font-['Cormorant_Garamond']">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Complimentary dining (20h daily)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Fine dining in selected restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Theatre shows & live music</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Wellness: Gym, Pools, Jacuzzis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Sports courts & teen zones</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>24-hour room service</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-foreground/60 italic font-['Cormorant_Garamond'] mt-4">
              Every space onboard has been chosen to support rest, reconnection, and joy — without compromise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {shipFeatures.map((feature, index) => (
            <Card key={index} className="border-2 border-border hover:border-accent transition-all duration-300 text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-['Cinzel'] text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/75 font-['Cormorant_Garamond'] text-lg">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-['Cinzel'] font-bold text-foreground mb-4">
              A December Unlike Any Other
            </h3>
            <p className="text-2xl text-primary font-semibold font-['Cinzel'] mb-2">
              Durban → Pomene Island → Durban
            </p>
            <p className="text-lg text-foreground/60 font-['Cormorant_Garamond']">
              Every day has been intentionally designed to balance worship, rest, and joyful exploration.
            </p>
          </div>

          <div className="space-y-4">
            {itinerary.map((day, index) => (
              <Card 
                key={index} 
                className="border-2 border-border hover:border-secondary transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-primary to-secondary p-6 md:w-64 flex-shrink-0">
                    <div className="text-accent font-['Cinzel'] font-bold text-2xl mb-2">
                      {day.day}
                    </div>
                    <div className="text-background/90 font-['Cormorant_Garamond'] text-lg mb-4">
                      {day.date}
                    </div>
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div className="text-background font-semibold font-['Cinzel']">
                        {day.port}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-background/80 font-['Cormorant_Garamond']">
                      {day.arrival !== "—" && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Arrival: {day.arrival}</span>
                        </div>
                      )}
                      {day.departure !== "—" && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Departure: {day.departure}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <CardContent className="flex-grow p-6">
                    <div className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full shrink-0 mt-2"></div>
                          <span className="text-foreground/80 font-['Cormorant_Garamond'] text-lg leading-relaxed">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
            <p className="text-sm text-center text-foreground/50 italic mt-4 font-['Cormorant_Garamond']">
              *Itinerary subject to port availability.
            </p>
          </div>
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                    Inclusions
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-['Cormorant_Garamond'] text-xl text-foreground/80">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>All Journey of Praise programmes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Insurance & port charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Complimentary dining & daily fine dining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Fitness facilities, pools & hot tubs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Theatre shows & teen entertainment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Selected sporting activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-2.5" />
                    <span>Room service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 bg-accent/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                    Exclusions
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-['Cormorant_Garamond'] text-xl text-foreground/80">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Flights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Specialty dining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Spa treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Drinks packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Shore excursions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Internet packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5" />
                    <span>Port transfers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Daily Program Sections */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-['Cinzel'] font-bold text-foreground mb-4">
              Daily Program
            </h3>
            <p className="text-lg text-foreground/60 font-['Cormorant_Garamond']">
              A carefully curated daily schedule balancing worship, fellowship, and relaxation
            </p>
          </div>

          <div className="space-y-16">
            {/* Monday - Copywriting Theme */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary rounded-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                      Monday 
                    </CardTitle>
                    <p className="text-foreground/60 font-['Cormorant_Garamond']">14 December 2026</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { time: "6:00AM - 11:00AM", activity: "Slow morning (breakfast)", icon: Heart },
                    { time: "11:00AM - 1:00PM", activity: "Explore sites on cruise: pools, waterpark, outdoor activities, spa, entertainment area, teens club, bowling alley, kids' club, baby club, 4D cinema, Legoland, shopping, gym & walking track", icon: Users },
                    { time: "12:00PM - 4:00PM", activity: "Lunch", icon: Heart },
                    { time: "2:00PM - 3:00PM", activity: "Word session with guest Pastor (main theatre)", icon: Music },
                    { time: "2:00PM - 3:00PM", activity: "Youth Word session with guest Pastor (conference room)", icon: Users },
                    { time: "5:30PM - 8:00PM", activity: "Dinner", icon: Heart },
                    { time: "8:00PM - 12:00AM", activity: "Worship session Guest Artist (main theatre)", icon: Music }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground font-['Cinzel']">{item.time}</p>
                        <p className="text-foreground/80 font-['Cormorant_Garamond']">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tuesday - Recharge Theme */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary rounded-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                      Tuesday 
                    </CardTitle>
                    <p className="text-foreground/60 font-['Cormorant_Garamond']">15 December 2026</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { time: "6:00AM - 11:00AM", activity: "Slow morning (breakfast)", icon: Heart },
                    { time: "11:00AM - 1:00PM", activity: "Explore sites on cruise: pools, waterpark, outdoor activities, spa, entertainment area, teens club, bowling alley, kids' club, baby club, 4D cinema, Legoland, shopping, gym & walking track", icon: Users },
                    { time: "12:00PM - 4:00PM", activity: "Lunch", icon: Heart },
                    { time: "2:00PM - 3:00PM", activity: "Word session with guest Pastor (main theatre)", icon: Music },
                    { time: "2:00PM - 3:00PM", activity: "Youth Word session with guest Pastor (conference room)", icon: Users },
                    { time: "5:30PM - 8:00PM", activity: "Dinner", icon: Heart },
                    { time: "8:00PM - 12:00AM", activity: "Worship session Guest Artist (main theatre)", icon: Music }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground font-['Cinzel']">{item.time}</p>
                        <p className="text-foreground/80 font-['Cormorant_Garamond']">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wednesday - Pomene, Mozambique */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                      Wednesday - Pomene, Mozambique
                    </CardTitle>
                    <p className="text-foreground/60 font-['Cormorant_Garamond']">16 December 2026 • Optional Island Visit: 8am - 6pm</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-foreground/80 font-['Cormorant_Garamond'] italic">
                    While docked in Pomene Bay, guests may choose an optional island excursion to explore the area's natural beauty. This excursion is arranged and paid directly through MSC Cruises and is not part of Journey of Praise cruise programme or entertainment. Guests remaining onboard may continue enjoying the scheduled Journey of Praise worship and fellowship activities while the ship is docked.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { time: "6:00 AM - 11:00 AM", activity: "Slow morning (breakfast)", icon: Heart },
                    { time: "11:00 AM - 1:00PM", activity: "Explore sites on cruise: pools, waterpark, outdoor activities, spa, entertainment area, teens club, bowling alley, kids' club, baby club, 4D cinema, Legoland, shopping, gym & walking track", icon: Users },
                    { time: "12:00PM - 4:00PM", activity: "Lunch", icon: Heart },
                    { time: "2:00PM - 3:00PM", activity: "Word session with guest Pastor (main theatre)", icon: Music },
                    { time: "2:00PM - 3:00PM", activity: "Youth Word session with guest Pastor (conference room)", icon: Users },
                    { time: "5:30PM - 8:00PM", activity: "Dinner", icon: Heart },
                    { time: "8:00PM - 12:00AM", activity: "Worship session Guest Artist (main theatre)", icon: Music }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground font-['Cinzel']">{item.time}</p>
                        <p className="text-foreground/80 font-['Cormorant_Garamond']">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Thursday - Rejoice Theme */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary rounded-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                      Thursday -  
                    </CardTitle>
                    <p className="text-foreground/60 font-['Cormorant_Garamond']">17 December 2026</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { time: "6:00 AM - 11:00 AM", activity: "Slow morning (breakfast)", icon: Heart },
                    { time: "11:00 AM - 1:00PM", activity: "Explore sites on cruise: pools, waterpark, outdoor activities, spa, entertainment area, teens club, bowling alley, kids' club, baby club, 4D cinema, Legoland, shopping, gym & walking track", icon: Users },
                    { time: "12:00PM - 4:00PM", activity: "Lunch", icon: Heart },
                    { time: "2:00PM - 3:00PM", activity: "Word session with guest Pastor (main theatre)", icon: Music },
                    { time: "2:00PM - 3:00PM", activity: "Youth Word session with guest Pastor (conference room)", icon: Users },
                    { time: "5:30PM - 8:00PM", activity: "Dinner", icon: Heart },
                    { time: "8:00PM - 1:00AM", activity: "Worship session Guest Artist (main theatre)", icon: Music }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground font-['Cinzel']">{item.time}</p>
                        <p className="text-foreground/80 font-['Cormorant_Garamond']">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Friday - Back in SA */}
            <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary rounded-lg">
                    <Anchor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-['Cinzel'] text-foreground">
                      Friday - Back in SA
                    </CardTitle>
                    <p className="text-foreground/60 font-['Cormorant_Garamond']">18 December 2026 • Durban, South Africa • 06:00</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <Anchor className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-bold text-xl font-['Cinzel'] text-foreground">Final Breakfast & Disembarkation</p>
                      <p className="text-foreground/80 font-['Cormorant_Garamond']">Journey home with a renewed spirit</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
