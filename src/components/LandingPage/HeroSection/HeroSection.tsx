"use client";

import {
  ArrowRight,
  Calendar,
  Sparkles,
  Zap,
  BarChart,
  PenLine,
  Users,
  Layers,
} from "lucide-react";
import { FloatingElement } from "./FloatingElements";
import { DashboardPreview } from "./DashboardPreview";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  animationDuration: number;
  opacity: number;
}

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(Array.from({ length: 100 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animationDuration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.5 + 0.1,
    })))

  }, [])

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
            filter: "blur(1px)",
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
          .join("\n")}
      `}</style>
    </div>
  );
}

const sections = [
  {
    id: "content-suite",
    title: "Content Suite",
    icon: PenLine,
    color: "purple",
  },
  { id: "collaboration", title: "Collaboration", icon: Users, color: "yellow" },
  {
    id: "content-management",
    title: "Content Management",
    icon: Layers,
    color: "pink",
  },
] as const;

type SectionId = (typeof sections)[number]["id"];

export function HeroSection() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setShowNavigation(scrollPosition > heroHeight * 0.5);

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div
        id="hero"
        className="relative overflow-hidden bg-[#070314] pt-16 pb-32"
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 overflow-hidden">
          {/* ... (gradient overlays remain unchanged) */}
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
        <FloatingElement
          position="right"
          className="top-24 right-8 lg:right-16"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span>AI Assistant</span>
          </div>
        </FloatingElement>
        <FloatingElement
          position="right"
          className="top-48 right-8 lg:right-16"
        >
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
              Streamline your content creation, scheduling, and analytics with
              our all-in-one platform. Let AI handle the heavy lifting while you
              focus on creating.
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
              background:
                "radial-gradient(50% 50% at 50% 0%, rgba(56, 189, 248, 0.2) 0%, transparent 100%)",
              filter: "blur(80px)",
            }}
          />

          {/* Dashboard Preview with enhanced glass effect */}
          <div className="relative mt-16">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-green-500/5 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(29, 78, 216, 0.3) 33%, rgba(16, 185, 129, 0.3) 66%, transparent 100%)",
                  filter: "blur(40px)",
                }}
              />
            </div>
            <DashboardPreview />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div
        className={`fixed left-8 top-1/2 -translate-y-1/2 space-y-6 z-50 transition-opacity duration-300 ${
          showNavigation ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`flex items-center gap-3 transition-all ${
              activeSection === section.id
                ? "opacity-100"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            <div
              className={`h-12 w-12 rounded-xl ${
                activeSection === section.id
                  ? `bg-${section.color}-600/20`
                  : "bg-white/10"
              }`}
            >
              <div className="h-full w-full flex items-center justify-center">
                <section.icon
                  className={`h-6 w-6 ${
                    activeSection === section.id
                      ? `text-${section.color}-400`
                      : "text-white"
                  }`}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
