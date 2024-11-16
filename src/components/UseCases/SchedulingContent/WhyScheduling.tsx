'use client'

import { motion } from 'framer-motion'
import { Clock, Target, BarChart, Globe } from 'lucide-react'

export default function WhyScheduling() {
  const reasons = [
    {
      icon: Clock,
      title: "Optimize Posting Times",
      description: "Schedule content to be published at the most effective times for maximum engagement and reach."
    },
    {
      icon: Target,
      title: "Maintain Consistency",
      description: "Keep your content calendar full and your audience engaged with regular, timely posts across all platforms."
    },
    {
      icon: BarChart,
      title: "Improve Productivity",
      description: "Plan and schedule content in batches, freeing up time for creativity and strategy."
    },
    {
      icon: Globe,
      title: "Global Audience Reach",
      description: "Schedule content across different time zones to effectively reach and engage your global audience."
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
          Why You Need <span className="text-purple-400">Scheduling Suite</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#170D36] p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4">
                <reason.icon className="w-6 h-6 text-purple-400" />
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