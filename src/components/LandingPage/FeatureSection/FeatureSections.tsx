'use client';

import React, { useRef, useEffect, useState } from "react";
import { PenLine, Users, Layers } from 'lucide-react';
import ContentSuite from "./ContentSuite";
import Collaboration from "./Collaboration";
import ContentManagement from "./ContentManagement";

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
];

export function FeatureSections() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isButtonContainerVisible, setIsButtonContainerVisible] = useState(false);
  const sectionRefs = useRef(sections.map(() => React.createRef<HTMLDivElement>()));
  const mainDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectingSections = new Set<string>();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex(
            (ref) => ref.current === entry.target
          );
          if (index !== -1) {
            const sectionId = sections[index].id;
            if (entry.isIntersecting) {
              intersectingSections.add(sectionId);
              setActiveSection(sectionId);
            } else {
              intersectingSections.delete(sectionId);
              setActiveSection(intersectingSections.size ? Array.from(intersectingSections)[0] : null);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const mainDivObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsButtonContainerVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref.current) sectionObserver.observe(ref.current);
    });

    if (mainDivRef.current) {
      mainDivObserver.observe(mainDivRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      mainDivObserver.disconnect();
    };
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={mainDivRef} className="min-h-screen bg-[#0A0A0A] text-white">
      <div className={`fixed left-8 top-1/2 -translate-y-1/2 space-y-6 z-50 transition-opacity duration-300 hidden lg:block ${isButtonContainerVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
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

      <div className="relative bg-[#070314]">
        <div ref={sectionRefs.current[0]}>
          <ContentSuite />
        </div>
        <div ref={sectionRefs.current[1]}>
          <Collaboration />
        </div>
        <div ref={sectionRefs.current[2]} className="mt-6 ">
          <ContentManagement />
        </div>
      </div>
    </div>
  );
}