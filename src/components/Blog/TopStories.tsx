'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { topStories } from '../../Data/Blog/Blog'

export default function TopStories() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-6 border-b border-purple-700 pb-2">Top Posts</h3>
      <div
        ref={scrollRef}
        className="space-y-6 md:space-y-6 overflow-x-auto md:overflow-x-hidden flex flex-col"
        style={{ scrollSnapType: isMobile ? 'x mandatory' : 'none' }}
      >
        {topStories.map((story) => (
          <article
            key={story.id}
            className="flex-shrink-0 w-full flex items-start space-x-4 bg-white bg-opacity-5 rounded-lg p-4 backdrop-blur-sm transition-transform hover:scale-105"
            style={{ scrollSnapAlign: isMobile ? 'start' : 'none' }}
          >
            <Image
              src={story.image}
              alt={story.title}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <h4 className="font-semibold mb-1">
                <Link href="#" className="hover:text-purple-400 transition-colors">
                  {story.title}
                </Link>
              </h4>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{story.date}</span>
                <span>{story.readingTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}