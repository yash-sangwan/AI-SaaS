'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Ubuntu } from "next/font/google";
import { assets } from '@/Assets/Assets'

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["500", "700"],
});

// Sample carousel data
const SLIDES = [
  {
    id: 1,
    title: "Clear career paths",
    description: "You'll be recognized for your hard work through our fair promotion mechanism. Achieve your career goals with a personal development plan. Rich industry products and management skills training.",
    image:assets.clearcareerpath.src
  },
  {
    id: 2,
    title: "Competitive salary",
    description: "We offer generous packages, including health benefits and paid time off, because we believe in rewarding our people. You can get performance bonuses and incentives including options.",
    image: assets.competitivesalary.src
  },
  {
    id: 3,
    title: "Work-life balance",
    description: "Flexible working hours and remote work options available. We value your personal time and well-being, ensuring a healthy balance between work and life.",
    image: assets.worklifebalancee.src
  }
]

export default function Component() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentSlide(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="min-h-screen bg-[#070314] text-white">
      <div className="container mx-auto">
        <div className="grid min-h-[90vh] grid-cols-1 lg:grid-cols-2">
          {/* Static Left Side */}
          <div className="flex flex-col justify-center space-y-8 py-12 lg:py-24 px-6 lg:px-16">
            <div className="space-y-4">
                <div className={`${ubuntu.className}`}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              {" "}What makes us{" "}
                <span className="relative text-white">
                  stand out?
                </span>
              </h1>
                </div>
              <p className="text-xl text-gray-400">
                Join our team and be part of something extraordinary
              </p>
            </div>
            <div>
              <Button
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-black hover:bg-white/90 hover:text-black"
                asChild
              >
                <a href="#openings">
                  View Openings
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Carousel Right Side */}
          <div className="relative flex items-center py-12 lg:py-24 bg-[#0c0621]">
            <div className="w-full overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="relative flex-[0_0_100%] px-6 lg:px-12"
                  >
                    <div className="rounded-2xl bg-white/90 p-8">
                      <div className="mb-6">
                        <span className="text-sm text-gray-400">
                          {String(index + 1).padStart(2, '0')}/{String(SLIDES.length).padStart(2, '0')}
                        </span>
                      </div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="mb-6 h-28 w-28"
                      />
                      <h3 className="mb-4 text-2xl text-black font-bold">{slide.title}</h3>
                      <p className="text-gray-400">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-16 left-6 lg:left-12 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
                onClick={scrollNext}
                disabled={!canScrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}