"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "The AI-powered content suggestions have revolutionized our content strategy. We're creating twice the content in half the time, with better engagement metrics than ever.",
      author: "Sarah Chen",
      role: "Content Director at TechFlow Digital",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    {
      quote: "The automated scheduling and analytics insights have transformed how we approach content distribution. It's like having an entire data science team at your fingertips.",
      author: "Marcus Rodriguez",
      role: "Marketing Lead at GrowthWise",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    {
      quote: "From ideation to publication, the AI suite has streamlined our entire content workflow. The smart recommendations and trend analysis are game-changing.",
      author: "Emma Thompson",
      role: "Editorial Manager at ContentPro",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    {
      quote: "The platform's ability to maintain our brand voice while suggesting optimizations has made scaling our content operation effortless.",
      author: "David Park",
      role: "CEO at Narrative AI",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    {
      quote: "Our content team's productivity has skyrocketed since implementing this AI-powered platform. It's been a game-changer for our digital presence.",
      author: "Olivia Martinez",
      role: "Head of Digital at InnovateTech",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    {
      quote: "The AI's ability to learn our brand voice and style has made content creation so much more efficient. It's like having a tireless assistant who knows us inside out.",
      author: "Alex Johnson",
      role: "Brand Manager at FutureBrand",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    {
      quote: "We've seen a 40% increase in engagement since using the AI-powered content optimization features. The results speak for themselves.",
      author: "Rachel Lee",
      role: "Social Media Strategist at Viral Ventures",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    {
      quote: "The predictive analytics have helped us stay ahead of trends and tailor our content strategy in real-time. It's like having a crystal ball for content marketing.",
      author: "Michael Brown",
      role: "CMO at TrendSetters Inc.",
      avatar: "/placeholder.svg?height=50&width=50"
    }
  ]

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % testimonials.length)
  }

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#070314] to-purple-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Empowering Content Creators with AI
        </h2>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonials}
              className="absolute left-0 z-10 text-white hover:bg-white/10 -translate-x-full"
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous testimonials</span>
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
              {[0, 1, 2, 3].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length
                const testimonial = testimonials[index]
                return (
                  <Card key={index} className="bg-white/5 border-none shadow-lg">
                    <blockquote className="p-6 h-full flex flex-col justify-between">
                      <p className="text-sm md:text-base text-white leading-relaxed mb-4">
                        "{testimonial.quote}"
                      </p>
                      <footer className="flex items-center mt-4">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-white">
                          <div className="font-semibold text-sm">{testimonial.author}</div>
                          <div className="text-xs opacity-75">{testimonial.role}</div>
                        </div>
                      </footer>
                    </blockquote>
                  </Card>
                )
              })}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonials}
              className="absolute right-0 z-10 text-white hover:bg-white/10 translate-x-full"
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next testimonials</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}