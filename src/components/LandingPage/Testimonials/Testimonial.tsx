'use client'

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

interface SmallScreenTestimonialsProps {
  testimonials: Testimonial[];
}

const SmallScreenTestimonials: React.FC<SmallScreenTestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalTestimonials = testimonials.length
  const testimonialRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials)
  }

  useEffect(() => {
    const handleSwipe = (e: TouchEvent) => {
      if (e.target instanceof Element && e.target.closest('.testimonial-card')) {
        const swipeThreshold = 50
        const touchDelta = e.changedTouches[0].clientX - e.touches[0].clientX
        if (touchDelta > swipeThreshold) {
          prevTestimonial()
        } else if (touchDelta < -swipeThreshold) {
          nextTestimonial()
        }
      }
    }

    const element = testimonialRef.current
    if (element) {
      element.addEventListener('touchend', handleSwipe)
      return () => element.removeEventListener('touchend', handleSwipe)
    }
  }, [])

  return (
    <div className="relative overflow-hidden" ref={testimonialRef}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="testimonial-card bg-white/5 border-none shadow-lg flex-shrink-0 w-full"
          >
            <blockquote className="p-5 h-full flex flex-col justify-between">
              <p className="text-sm text-white leading-relaxed mb-4">"{testimonial.quote}"</p>
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
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevTestimonial}
          className="mr-2 text-white hover:bg-white hover:text-black"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextTestimonial}
          className="ml-2 text-white hover:bg-white hover:text-black"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

export default function Component() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The AI-powered content suggestions have revolutionized our content strategy. We're creating twice the content in half the time, with better engagement metrics than ever.",
      author: "Sarah Chen",
      role: "Content Director at TechFlow Digital",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "The automated scheduling and analytics insights have transformed how we approach content distribution. It's like having an entire data science team at your fingertips.",
      author: "Marcus Rodriguez",
      role: "Marketing Lead at GrowthWise",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "From ideation to publication, the AI suite has streamlined our entire content workflow. The smart recommendations and trend analysis are game-changing.",
      author: "Emma Thompson",
      role: "Editorial Manager at ContentPro",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "The AI-powered content suggestions have revolutionized our content strategy. We're creating twice the content in half the time, with better engagement metrics than ever.",
      author: "Sarah Chen",
      role: "Content Director at TechFlow Digital",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "The automated scheduling and analytics insights have transformed how we approach content distribution. It's like having an entire data science team at your fingertips.",
      author: "Marcus Rodriguez",
      role: "Marketing Lead at GrowthWise",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "From ideation to publication, the AI suite has streamlined our entire content workflow. The smart recommendations and trend analysis are game-changing.",
      author: "Emma Thompson",
      role: "Editorial Manager at ContentPro",
      avatar: "/placeholder.svg?height=50&width=50",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const totalTestimonials = testimonials.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleTestimonials(3);
        setIsSmallScreen(false);
      } else if (window.innerWidth >= 768) {
        setVisibleTestimonials(2);
        setIsSmallScreen(false);
      } else {
        setVisibleTestimonials(1);
        setIsSmallScreen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonials = () => {
    if (currentIndex < totalTestimonials - visibleTestimonials) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevTestimonials = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const itemWidth = 100 / visibleTestimonials - (2 * 2 / visibleTestimonials);
  const translateX = -(currentIndex * (100 / visibleTestimonials));

  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-[#070314] to-[#220a35]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 md:mb-16">
          Empowering{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent">
            Content Creators
          </span>{" "}
          with AI
        </h2>
        <div className="relative max-w-6xl mx-auto">
          {isSmallScreen ? (
            <SmallScreenTestimonials testimonials={testimonials} />
          ) : (
            <>
              <div className="overflow-hidden w-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(${translateX}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      className="bg-white/5 border-none shadow-lg flex-shrink-0 mx-2" 
                      style={{ width: `calc(${itemWidth}% - 2px)` }} 
                    >
                      <blockquote className="p-5 h-full flex flex-col justify-between">
                        <p className="text-sm md:text-base text-white leading-relaxed mb-4">"{testimonial.quote}"</p>
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
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-6 md:mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonials}
                  className="mr-2 text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonials}
                  className="ml-2 text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentIndex >= totalTestimonials - visibleTestimonials}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}