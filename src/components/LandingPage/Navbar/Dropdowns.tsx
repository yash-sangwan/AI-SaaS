'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronRight, FileText, Users, ArrowUpRight, BookOpenText } from 'lucide-react'
import { useCasesData, resourcesData, aboutData } from '@/Data/LandingPage/Navigation'
import { assets } from '@/Assets/Assets'
import { FaBox, FaUserGraduate } from 'react-icons/fa'
import { FaUserGroup } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Dropdown({ trigger, children, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 100)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}
      {isOpen && (
        <div
          className={`absolute left-[-40px] mt-5 rounded-lg bg-[#171717] py-4 shadow-lg ring-1 ring-[#313131] ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export function UseCasesDropdown() {
  return (
    <div className="grid w-[800px] grid-cols-3 gap-8 p-6">
      {useCasesData.sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <div className="flex items-center gap-2">
            {section.title === 'Content Suite' && <FaBox className={`h-4 w-4 ${section.color}`} />}
            {section.title === 'Collaboration' && <FaUserGroup className={`h-5 w-5 ${section.color}`} />}
            {section.title === 'One For All' && <MdDashboard className={`h-5 w-5 ${section.color}`} />}
            <h3 className="font-medium text-white">{section.title}</h3>
          </div>
          <div className="space-y-2">
            {section.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-2 rounded-lg p-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function ResourcesDropdown() {
  return (
    <div className="flex w-[600px] gap-8 p-6">
      <div className="flex-1 space-y-6">
        <h3 className="text-sm font-medium text-gray-400">Resources</h3>
        <div className="space-y-4">
          {resourcesData.navigation.map((item) => (
            <Link key={item.title} href={item.href} className="group block rounded-lg p-3 hover:bg-white/5" target="_blank" rel="noopener noreferrer">
              <div className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 text-white/70 group-hover:text-blue-500">
                {item.icon === 'FileText' && <FileText className="h-5 w-5" />}
                {item.icon === 'HelpCircle' && <BookOpenText className="h-5 w-5" />}
              </div>
              <div>
                <h4 className="font-medium text-white group-hover:text-blue-500">{item.title}</h4>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-400">Featured</h3>
        <div className="mt-4">
          <Link href={resourcesData.featured.href} className="group block rounded-lg p-3 hover:bg-white/5">
            <img
              src={resourcesData.featured.image}
              alt={resourcesData.featured.title}
              className="rounded-lg"
            />
            <h4 className="mt-2 font-medium text-white group-hover:text-blue-500">
              {resourcesData.featured.title}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function AboutDropdown() {
  return (
    <div className="w-48 py-2">
      {aboutData.links.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="flex items-center justify-between px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
        >
          {item.title}
          {item.arrow && <ArrowUpRight className="h-4 w-4 text-white/50" />}
        </Link>
      ))}
    </div>
  );
}