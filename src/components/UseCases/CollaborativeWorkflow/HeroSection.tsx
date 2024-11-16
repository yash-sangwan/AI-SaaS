'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Zap, Sparkles, ChevronDown, UserPlus, Settings, X, Info, ArrowRight } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function CollaborativeWorkflowHeroSection() {
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
              <a href="#" className="hover:text-white transition-colors">Collaborative Workflow</a>
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
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-yellow-600/20 text-yellow-400 text-xs md:text-sm font-medium"
                >
                  Collaboration
                </motion.div>
              </div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
              >
                Plug and play with{" "}
                <span className="bg-yellow-500/20 px-2 py-1 md:px-4 md:py-1 rounded-lg text-yellow-300">
                  your workflow
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8"
              >
                Our platform is easy to adopt into any workflow with our API, integrations, and export capabilities.
                Collaborate seamlessly and automate your processes.
              </motion.p>

              {/* Feature List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 md:space-y-4 mb-6 md:mb-8"
              >
                {[
                  { icon: Users, text: "Seamless team collaboration" },
                  { icon: Zap, text: "Streamlined workflow automation" },
                  { icon: Settings, text: "Customizable role-based permissions" },
                  { icon: Sparkles, text: "AI-assisted task management" }
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
                  Start Collaborating
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
                  <div className="flex-1 text-center text-sm text-gray-400">Collaboration Suit</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Left Sidebar */}
                  <div className="hidden md:block md:col-span-4 border-b md:border-b-0 md:border-r border-white/10">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 space-y-2"
                    >
                      <div className="p-3 rounded-lg bg-yellow-500/20 cursor-pointer">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5" />
                            <span className='text-sm'>Collaborative Workflow</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                        <div className="flex items-center justify-between text-white/70">
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
                      <h3 className="text-lg font-medium text-white">Role Management</h3>
                    </div>
                    
                    {/* Add New Role Section */}
                    <div className="bg-white/5 rounded-lg border border-white/10 p-4 mb-6">
                      <h4 className="text-sm font-medium text-white mb-4">Add New Role</h4>
                      <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <Input placeholder="Enter role name" className="bg-white/10 border-white/20 text-white" />
                        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                          <UserPlus className="mr-2 h-4 w-4" /> Add Role
                        </Button>
                      </div>
                    </div>

                    {/* Permissions Grid */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-5 gap-4 pb-2 border-b border-white/10">
                        <div className="text-sm font-medium text-gray-400">Permission</div>
                        <div className="text-sm font-medium text-gray-400 text-center">View</div>
                        <div className="text-sm font-medium text-gray-400 text-center">Edit</div>
                        <div className="text-sm font-medium text-gray-400 text-center">Delete</div>
                        <div className="text-sm font-medium text-gray-400 text-center">Manage</div>
                      </div>
                      {[
                        { permission: "Content", view: true, edit: true, delete: false, manage: false },
                        { permission: "Media Library", view: true, edit: false, delete: false, manage: false },
                        { permission: "Team Management", view: true, edit: false, delete: false, manage: false },
                      ].map((perm, index) => (
                        <div key={perm.permission} className="grid grid-cols-5 gap-4 items-center">
                          <div className="text-sm text-white">{perm.permission}</div>
                          <div className="flex justify-center">
                            <Checkbox checked={perm.view} className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500" />
                          </div>
                          <div className="flex justify-center">
                            <Checkbox checked={perm.edit} className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500" />
                          </div>
                          <div className="flex justify-center">
                            <Checkbox checked={perm.delete} className="border-white/20" />
                          </div>
                          <div className="flex justify-center">
                            <Checkbox checked={perm.manage} className="border-white/20" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Role Summary */}
                    <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <div className="flex items-center gap-2 text-yellow-400 mb-2">
                        <Settings className="h-4 w-4" />
                        <span className="text-sm font-medium">Role Configuration</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Configure permissions for each role by selecting the appropriate access levels.
                        Use the checkboxes above to grant or restrict permissions for different areas of the platform.
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