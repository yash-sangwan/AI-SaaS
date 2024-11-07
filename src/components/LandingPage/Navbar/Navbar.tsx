'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronRight, ChevronDown, Variable } from 'lucide-react'
import { Dropdown, UseCasesDropdown, ResourcesDropdown, AboutDropdown } from './Dropdowns'
import { MobileMenu } from './Mobile_menu'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleDropdownHover = (dropdown: string) => {
    setHoveredDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setHoveredDropdown(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-transparent border-b border-white/10' : 'bg-black border-b border-transparent'
      }`}>
        {/* Blur overlay for content behind navbar */}
        <div 
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            backdropFilter: 'blur(8px)',
          }}
        />

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link
              className="flex items-center gap-2 text-lg  text-white"
              href="#"
            >
              <Image
                src="/summit-logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className=' font-semibold'>NAME</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <Dropdown
              trigger={
                <button 
                  className="flex items-center gap-1 text-sm font-medium text-white hover:text-blue-500"
                  onMouseEnter={() => handleDropdownHover('useCases')}
                  onMouseLeave={handleDropdownLeave}
                >
                  Use cases
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hoveredDropdown === 'useCases' ? 'rotate-180' : ''}`} />
                </button>
              }
            >
              <UseCasesDropdown />
            </Dropdown>

            <Dropdown
              trigger={
                <button 
                  className="flex items-center gap-1 text-sm font-medium text-white hover:text-blue-500"
                  onMouseEnter={() => handleDropdownHover('resources')}
                  onMouseLeave={handleDropdownLeave}
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hoveredDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
              }
            >
              <ResourcesDropdown />
            </Dropdown>

            <Dropdown
              trigger={
                <button 
                  className="flex items-center gap-1 text-sm font-medium text-white hover:text-blue-500"
                  onMouseEnter={() => handleDropdownHover('about')}
                  onMouseLeave={handleDropdownLeave}
                >
                  About
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${hoveredDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
              }
            >
              <AboutDropdown />
            </Dropdown>

            <Link
              className="text-sm font-medium text-white hover:text-blue-500"
              href="#"
            >
              Contact
            </Link>

            <Link
              className="text-sm font-medium text-white hover:text-blue-500"
              href="#"
            >
              Pricing
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Link
              className="hidden text-sm font-medium text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-200 sm:block"
              href="#"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="hidden rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-300 transition-colors duration-200 sm:block"
            >
              Try NAME
              <ChevronRight className="ml-1 inline-block h-4 w-4 " />
            </Link>

            {/* Mobile menu button */}
            <button
              className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Spacer div to push content below the navbar */}
      <div className="h-16"></div>
    </>
  )
}