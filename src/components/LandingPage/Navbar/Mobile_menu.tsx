'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, X, FileText, Users, ArrowUpRight, ChevronRight } from 'lucide-react'
import { useCasesData, resourcesData, aboutData } from '@/Data/LandingPage/Navigation'
import { FaBox } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { MdDashboard } from 'react-icons/md'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black lg:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex-1" />
        <button onClick={onClose} className="p-2">
          <X className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="flex flex-col gap-4 px-4 py-2">
        <Link
          href="#"
          className="w-full rounded-lg border border-white/10 bg-white hover:bg-gray-200 px-4 py-2 text-center text-black"
        >
          Try Summit
          <ChevronRight className="ml-1 pb-1 inline-block h-4 w-4" />

        </Link>
        <Link href="#" className="w-full rounded-lg border border-white/10 hover:border-white px-4 py-2 text-center text-white">
          Sign in
        </Link>
      </div>

      <div className="mt-4 space-y-2 px-4 ">
        {/* Use Cases Section */}
        <div>
          <button
            className="flex w-full items-center justify-between py-2 text-left hover:text-blue-500  text-white"
            onClick={() => setExpandedSection(expandedSection === 'useCases' ? null : 'useCases')}
          >
            Use Cases
            <ChevronDown
              className={`h-5 w-5 transform transition-transform ${
                expandedSection === 'useCases' ? 'text-blue-500 rotate-180' : ''
              }`}
            />
          </button>
          {expandedSection === 'useCases' && (
            <div className="ml-4 space-y-6 pt-2">
              {useCasesData.sections.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center gap-2 text-white">
                  {section.title === 'Content Suite' && <FaBox className={`h-4 w-4 ${section.color}`} />}
            {section.title === 'Collaboration' && <FaUserGroup className={`h-5 w-5 ${section.color}`} />}
            {section.title === 'One For All' && <MdDashboard className={`h-5 w-5 ${section.color}`} />}
                    <span>{section.title}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="rounded-lg bg-white/5 p-3 text-sm text-white/70 hover:bg-white/10"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Resources Section */}
        <div>
          <button
            className="flex w-full items-center justify-between py-2 text-left text-white hover:text-blue-500"
            onClick={() => setExpandedSection(expandedSection === 'resources' ? null : 'resources')}
          >
            Resources
            <ChevronDown
              className={`h-5 w-5 transform transition-transform ${
                expandedSection === 'resources' ? 'text-blue-500 rotate-180' : ''
              }`}
            />
          </button>
          {expandedSection === 'resources' && (
            <div className="ml-4 space-y-2 pt-2">
              {resourcesData.navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-lg p-2 text-white/70 hover:bg-white/10"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* About Section */}
        <div>
          <button
            className="flex w-full items-center justify-between py-2 text-left hover:text-blue-500 text-white"
            onClick={() => setExpandedSection(expandedSection === 'about' ? null : 'about')}
          >
            About
            <ChevronDown
              className={`h-5 w-5 transform transition-transform ${
                expandedSection === 'about' ? 'text-blue-500 rotate-180' : ''
              }`}
            />
          </button>
          {expandedSection === 'about' && (
            <div className="ml-4 space-y-2 pt-2">
              {aboutData.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg p-2 text-white/70 hover:bg-white/10"
                >
                  {item.title}
                  {item.arrow && <ArrowUpRight className="h-4 w-4 text-white/50" />}                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Static Links */}
        <Link href="#" className="block py-2 text-white hover:text-blue-500">
          Contact
        </Link>
        <Link href="#" className="block py-2 text-white hover:text-blue-500">
          Pricing
        </Link>
      </div>
    </div>
  )
}