'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Users, Globe } from 'lucide-react'

export default function WhyContentCreation() {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Boost Brand Awareness",
      description: "Create compelling content that resonates with your audience and increases your brand's visibility."
    },
    {
      icon: TrendingUp,
      title: "Drive Engagement",
      description: "Craft content that sparks conversations and encourages interactions, fostering a loyal community."
    },
    {
      icon: Users,
      title: "Establish Authority",
      description: "Share valuable insights and expertise to position your brand as a thought leader in your industry."
    },
    {
      icon: Globe,
      title: "Expand Reach",
      description: "Leverage various content formats and platforms to connect with a wider, more diverse audience."
    }
  ]

  return (
    <section className="bg-[#070314]  py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12"
        >
          Why You Need <span className="text-purple-400">Content Suite</span>
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