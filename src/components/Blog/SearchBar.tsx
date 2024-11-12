'use client'

import { Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form 
      onSubmit={handleSearch} 
      className={`relative transition-all duration-300 ${
        scrolled ? 'mt-12' : 'mt-4'
      }`}
    >
      <input
        type="text"
        placeholder="Read about..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-full bg-white bg-opacity-10 border border-gray-700 focus:outline-none focus:ring-1  text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  )
}