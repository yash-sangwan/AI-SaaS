'use client'

import { motion } from 'framer-motion'
import { Users, Zap, Target, Sparkles } from 'lucide-react'

export default function WhyCollaboration() {
  const reasons = [
    {
      icon: Users,
      title: "Seamless Team Coordination",
      description: "Foster better communication and alignment across your entire team, ensuring everyone is on the same page."
    },
    {
      icon: Zap,
      title: "Increased Productivity",
      description: "Streamline workflows and reduce bottlenecks, allowing your team to accomplish more in less time."
    },
    {
      icon: Target,
      title: "Enhanced Project Management",
      description: "Easily track progress, assign tasks, and manage deadlines for improved project outcomes."
    },
    {
      icon: Sparkles,
      title: "Innovative Problem Solving",
      description: "Leverage diverse perspectives and collective intelligence to tackle complex challenges more effectively."
    }
  ]

  return (
    <section className="bg-[#070314] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12"
        >
          Why You Need <span className="text-yellow-400">Collaboration Suite</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#170D36] p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-full mb-4">
                <reason.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}