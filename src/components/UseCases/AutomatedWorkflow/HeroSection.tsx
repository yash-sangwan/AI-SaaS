'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Sparkles, ChevronDown, ArrowRight, Settings, Play, Share2, CheckCircle2, XCircle, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function AutomatedWorkflowHeroSection() {
  return (
    <div className="bg-[#070314] flex flex-col">
      {/* Hero Section */}
      <section className="flex items-center justify-center relative overflow-hidden">
        {/* Main Content */}
        <div className="container mx-auto px-4 relative max-w-7xl">
          {/* Navigation */}
          <nav className="container mx-auto px-4 py-6 text-sm text-gray-400 relative z-20">
            <div className="flex items-center gap-3">
              <a href="#" className="transition-colors">Use Cases</a>
              <span>›</span>
              <a href="#" className="hover:text-white transition-colors">Automated Workflow</a>
            </div>
          </nav>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 xl:w-5/12 mb-8 lg:mb-0">
              {/* Top Icons */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-yellow-600/20 flex items-center justify-center"
                >
                  <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-yellow-600/20 text-yellow-400 text-xs md:text-sm font-medium"
                >
                  Automation
                </motion.div>
              </div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
              >
                Streamline with{" "}
                <span className="bg-yellow-500/20 px-2 py-1 md:px-4 md:py-1 rounded-lg text-yellow-300">
                  automated workflows
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8"
              >
                Enhance your team's efficiency with intelligent automation. Set up custom workflows
                that adapt to your unique processes and role-based permissions.
              </motion.p>

              {/* Feature List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 md:space-y-4 mb-6 md:mb-8"
              >
                {[
                  { icon: Zap, text: "Automated approval processes" },
                  { icon: Settings, text: "Customizable workflow rules" },
                  { icon: Sparkles, text: "AI-powered task routing" },
                  { icon: Share2, text: "Seamless integrations with your tools" }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                    <span className="text-sm md:text-base">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  Start Automating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Right Interface */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-1/2 xl:w-8/12"
            >
              {/* Main Content Area with Mac Interface */}
              <div className="bg-black/30 rounded-lg border border-white/10 overflow-hidden">
                {/* Mac Window Header */}
                <div className="flex items-center px-4 py-2 bg-[#1A1A1A] border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-400">Automated Workflow</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Left Sidebar */}
                  <div className="hidden md:block md:col-span-4 border-b md:border-b-0 md:border-r border-white/10">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 space-y-2"
                    >
                     
                      <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                        <div className="flex items-center justify-between text-white/70">
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5" />
                            <span className='text-sm'>Collaborative Workflow</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-yellow-500/20 cursor-pointer">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-3">
                            <Zap className="h-5 w-5" />
                            <span className='text-sm'>Automated Workflow</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                        <div className="flex items-center justify-between text-white/70">
                          <div className="flex items-center gap-3">
                            <Sparkles className="h-5 w-5" />
                            <span className='text-sm'>AI Assistant</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Main Panel */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-8 p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-white">Content Approval Request</h3>
                    </div>
                    
                    {/* Content Preview Skeleton */}
                    <div className="bg-white/5 rounded-lg border border-white/10 p-4 mb-6">
                      <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center mb-4">
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-10 w-10 bg-white/10 rounded-full" />
                          <div>
                            <Skeleton className="h-3 w-20 mb-2 bg-white/10" />
                            <Skeleton className="h-2 w-32 bg-white/10" />
                          </div>
                        </div>
                        <Skeleton className="h-8 w-20" />
                      </div>
                    </div>

                    {/* Approval Actions */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-white mb-2">Approval Actions</h4>
                      <div className="flex gap-4">
                        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                          <CheckCircle2 className="mr-2 h-4 w-4" /> Approve
                        </Button>
                        <Button variant="outline" className="flex-1 border-red-500/20 text-red-400 hover:text-red-500">
                          <XCircle className="mr-2 h-4 w-4" /> Reject
                        </Button>
                      </div>
                    </div>

                    {/* Workflow Summary */}
                    <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <div className="flex items-center gap-2 text-yellow-400 mb-2">
                        <Zap className="h-4 w-4" />
                        <span className="text-sm font-medium">Automated Workflow</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        This approval request was automatically routed based on your role settings.
                        Once approved, the content will be scheduled for posting on designated platforms.
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}