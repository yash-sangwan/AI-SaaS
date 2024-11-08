'use client'

import { motion } from 'framer-motion'
import { PenLine, Calendar, BarChart3, ChevronDown, Sparkles } from 'lucide-react'

export default function ContentSuite() {
  return (
    <section className="relative overflow-hidden bg-[#070314] min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          {/* Top Icons */}
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-12 w-12 rounded-xl bg-purple-600/20 flex items-center justify-center"
            >
              <Sparkles className="h-6 w-6 text-purple-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-4 py-2 rounded-lg bg-purple-600/20 text-purple-400 text-sm font-medium"
            >
              AI Powered
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Content Suite <span className="bg-purple-500/20 px-4 py-1 rounded-lg text-purple-300">for modern teams</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Experience next-level content management. Our all-in-one platform empowers you to work smarter, not harder.
          </motion.p>

          {/* Main Content Area with Mac Interface */}
          <div className="bg-black/30 rounded-lg border border-white/10 overflow-hidden">
            {/* Mac Window Header */}
            <div className="flex items-center px-4 py-2 bg-[#1A1A1A] border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">Content Suite</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Sidebar */}
              <div className="hidden md:block md:col-span-4 border-b md:border-b-0 md:border-r border-white/10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 space-y-2"
                >
                  <div className="p-3 rounded-lg bg-purple-500/20 cursor-pointer">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <PenLine className="h-5 w-5" />
                        <span>Content Creation</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                    <div className="flex items-center justify-between text-white/70">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5" />
                        <span>Scheduling Content</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                    <div className="flex items-center justify-between text-white/70">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-5 w-5" />
                        <span>AI Analytics</span>
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
                  <h3 className="text-lg font-medium text-white">Content Creation</h3>
                </div>
                
                {/* Content Creation Interface */}
                <div className="bg-black rounded-lg border border-white/10 p-4">
                  <div className="space-y-4">
                    {/* Skeleton UI for editor */}
                    <div className="h-8 bg-white/5 rounded animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 bg-white/5 rounded w-3/4 animate-pulse" />
                      <div className="h-4 bg-white/5 rounded w-1/2 animate-pulse" />
                      <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
                    </div>
                    
                    {/* AI Suggestions Panel */}
                    <div className="mt-6 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-purple-400" />
                        <span className="text-sm text-purple-300">AI Suggestions</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-purple-500/20 rounded w-full animate-pulse" />
                        <div className="h-3 bg-purple-500/20 rounded w-4/5 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview Panel */}
                <div className="mt-4 p-4 bg-black/50 rounded-lg border border-white/10">
                  <div className="text-sm text-gray-400 mb-2">Preview</div>
                  <div className="h-32 bg-white/5 rounded-lg animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
