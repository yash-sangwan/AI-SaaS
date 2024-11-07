'use client'

import { ArrowRight, Calendar, Sparkles, Zap, BarChart } from 'lucide-react'
import { FloatingElement } from './FloatingElements'
import { DashboardPreview } from './DashboardPreview'

function Particles() {
  const particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    animationDuration: Math.random() * 15 + 10,
    opacity: Math.random() * 0.5 + 0.1,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-gradient-to-br from-blue-300 to-green-300"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            animation: `float-${particle.id} ${particle.animationDuration}s infinite ease-in-out`,
          }}
        />
      ))}
      <style jsx>{`
        ${particles
          .map(
            (particle) => `
          @keyframes float-${particle.id} {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
            }
            33% {
              transform: translate(${Math.random() * 40 - 20}px, ${
              Math.random() * 40 - 20
            }px) rotate(120deg);
            }
            66% {
              transform: translate(${Math.random() * 40 - 20}px, ${
              Math.random() * 40 - 20
            }px) rotate(240deg);
            }
          }
        `
          )
          .join('\n')}
      `}</style>
    </div>
  )
}

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#070314] pt-16 pb-32">
      {/* Gradient overlays */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main center glow */}
        <div 
          className="absolute inset-x-0 -bottom-40 h-[600px] opacity-30"
          style={{
            background: 'radial-gradient(50% 50% at 50% 100%, rgba(56, 189, 248, 0.3) 0%, rgba(29, 78, 216, 0.2) 25%, transparent 100%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Button glow effect */}
        <div 
          className="absolute left-1/2 top-[60%] -translate-x-1/2 h-[200px] w-[400px] opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Ambient top light */}
        <div 
          className="absolute inset-x-0 top-0 h-[300px] opacity-20"
          style={{
            background: 'radial-gradient(70% 30% at 50% 0%, rgba(29, 78, 216, 0.2) 0%, transparent 100%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Green light gradient */}
        <div 
          className="absolute -right-40 top-1/4 h-[400px] w-[400px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Particles */}
      <Particles />

      {/* Floating Elements */}
      <FloatingElement position="left" className="top-24 left-8 lg:left-16">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Calendar className="h-4 w-4 text-blue-400" />
          <span>Schedule Content</span>
        </div>
      </FloatingElement>
      <FloatingElement position="left" className="top-48 left-8 lg:left-16">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Zap className="h-4 w-4 text-green-400" />
          <span>Automated Workflows</span>
        </div>
      </FloatingElement>
      <FloatingElement position="right" className="top-24 right-8 lg:right-16">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Sparkles className="h-4 w-4 text-blue-400" />
          <span>AI Assistant</span>
        </div>
      </FloatingElement>
      <FloatingElement position="right" className="top-48 right-8 lg:right-16">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <BarChart className="h-4 w-4 text-purple-400" />
          <span>Analytics Dashboard</span>
        </div>
      </FloatingElement>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent pb-2">
              AI powered
            </span>
            content management suite
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Streamline your content creation, scheduling, and analytics with our all-in-one platform.
            Let AI handle the heavy lifting while you focus on creating.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="#"
              className="rounded-md bg-white px-4 py-2 text-md font-bold text-black hover:bg-gray-300 transition-colors duration-200 flex items-center"
            >
              Try for free
              <ArrowRight className="ml-2 inline-block h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors duration-200"
            >
              Schedule Demo
            </a>
          </div>
        </div>
        
        {/* Light effect for dashboard */}
        <div 
          className="absolute left-1/2 top-[80%] -translate-x-1/2 w-full max-w-5xl h-[200px] opacity-20"
          style={{
            background: 'radial-gradient(50% 50% at 50% 0%, rgba(56, 189, 248, 0.2) 0%, transparent 100%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Dashboard Preview with enhanced glass effect */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-green-500/5 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(29, 78, 216, 0.3) 33%, rgba(16, 185, 129, 0.3) 66%, transparent 100%)',
                filter: 'blur(40px)',
              }}
            />
          </div>
          <DashboardPreview />
        </div>
      </div>
    </div>
  )
}