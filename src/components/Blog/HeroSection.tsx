import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredPost, topStories } from '@/Data/Blog/Blog'

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-[#070314] to-[#0d0829] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-purple-400 text-lg font-semibold mb-2">Our Blog</h1>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Stories & Ideas
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore breathtaking landscapes, iconic landmarks, and hidden gems around the globe
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Post - Large Card */}
          <div className="relative group overflow-hidden rounded-3xl bg-[#0f0a2a]">
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0a2a]/90 z-10" />
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1 bg-blue-900/40 text-blue-300 text-sm rounded-full backdrop-blur-sm">
                  {featuredPost.category}
                </span>
                <div className="text-sm text-gray-300">
                  {featuredPost.date} • {featuredPost.readingTime}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {featuredPost.title}
              </h3>
              <p className="text-gray-300 mb-6 line-clamp-2">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/blog/post/${featuredPost.slug}`}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
              >
                READ MORE
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Grid of 3 Smaller Posts */}
          <div className="grid gap-6">
            {[...topStories, topStories[0]].slice(0, 3).map((story) => (
              <div
                key={story.id}
                className="relative group overflow-hidden rounded-3xl bg-[#0f0a2a] h-[200px]"
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0a2a]/90 z-10" />
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-900/40 text-blue-300 text-xs rounded-full backdrop-blur-sm">
                      {story.category}
                    </span>
                    <div className="text-xs text-gray-300">
                      {story.date} • {story.readingTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white line-clamp-2">
                    {story.title}
                  </h3>
                  <Link
                    href={`/blog/post/${story.slug}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
                  >
                    READ MORE
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}