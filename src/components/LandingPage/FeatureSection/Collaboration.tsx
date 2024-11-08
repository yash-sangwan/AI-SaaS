'use client'

import { motion } from "framer-motion"
import { Users, Zap, Sparkles, ChevronDown, UserPlus, Settings, X, Info } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function Component() {
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
              className="h-12 w-12 rounded-xl bg-yellow-600/20 flex items-center justify-center"
            >
              <Users className="h-6 w-6 text-yellow-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-4 py-2 rounded-lg bg-yellow-600/20 text-yellow-400 text-sm font-medium"
            >
              Collaboration
            </motion.div>
          </div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Plug and play with <span className="bg-yellow-500/20 px-4 py-1 rounded-lg text-yellow-300">your workflow</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Our platform is easy to adopt into any workflow with our API, integrations, and export capabilities.
            Collaborate seamlessly and automate your processes.
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
              <div className="flex-1 text-center text-sm text-gray-400">Collaboration</div>
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
                        <span>Collaborative Workflow</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                    <div className="flex items-center justify-between text-white/70">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5" />
                        <span>Automated Workflow</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                    <div className="flex items-center justify-between text-white/70">
                      <div className="flex items-center gap-3">
                        <Sparkles className="h-5 w-5" />
                        <span>AI Assistant</span>
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
                {/* Add New Role Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8 p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <h4 className="text-sm font-medium text-white mb-4">Add New Role</h4>
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <Input placeholder="Enter role name" className="bg-white/10 border-white/20 text-white" />
                    <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                      <UserPlus className="mr-2 h-4 w-4" /> Add Role
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white/10 rounded">
                      <span className="text-sm text-white">Video Editor</span>
                      <Button variant="ghost" size="sm" className="text-white hover:text-red-500">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/10 rounded">
                      <span className="text-sm text-white">Content Writer</span>
                      <Button variant="ghost" size="sm" className="text-white hover:text-red-500">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/10 rounded">
                      <span className="text-sm text-white">Manager</span>
                      <Button variant="ghost" size="sm" className="text-white hover:text-red-500">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Permissions Grid */}
                <div className="space-y-6">
                  {/* Headers */}
                  <div className="grid grid-cols-5 gap-4 pb-4 border-b border-white/10">
                    <div className="text-sm font-medium text-gray-400">Permission</div>
                    <InfoTooltip >
                      <div className="flex items-center justify-center text-sm font-medium text-gray-400">
                        View <Info className="h-4 w-4 ml-1" />
                      </div>
                    </InfoTooltip>
                    <InfoTooltip >
                      <div className="flex items-center justify-center text-sm font-medium text-gray-400">
                        Edit <Info className="h-4 w-4 ml-1" />
                      </div>
                    </InfoTooltip>
                    <InfoTooltip >
                      <div className="flex items-center justify-center text-sm font-medium text-gray-400">
                        Delete <Info className="h-4 w-4 ml-1" />
                      </div>
                    </InfoTooltip>
                    <InfoTooltip >
                      <div className="flex items-center justify-center text-sm font-medium text-gray-400">
                        Manage <Info className="h-4 w-4 ml-1" />
                      </div>
                    </InfoTooltip>
                  </div>

                  {/* Permissions Rows */}
                  {[
                    { permission: "Content", view: true, edit: true, delete: false, manage: false },
                    { permission: "Media Library", view: true, edit: false, delete: false, manage: false },
                    { permission: "Team Management", view: true, edit: false, delete: false, manage: false },
                    { permission: "Settings", view: true, edit: false, delete: false, manage: false },
                  ].map((perm, index) => (
                    <motion.div
                      key={perm.permission}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="grid grid-cols-5 gap-4 items-center"
                    >
                      <div className="text-sm text-white">{perm.permission}</div>
                      <div className="flex justify-center">
                        <Checkbox
                          checked={perm.view}
                          onClick={(e) => e.preventDefault()}
                          className="cursor-default data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                        />
                      </div>
                      <div className="flex justify-center">
                        <Checkbox
                          checked={perm.edit}
                          onClick={(e) => e.preventDefault()}
                          className="cursor-default data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                        />
                      </div>
                      <div className="flex justify-center">
                        <Checkbox
                          checked={perm.delete}
                          onClick={(e) => e.preventDefault()}
                          className="cursor-default border-white/20"
                        />
                      </div>
                      <div className="flex justify-center">
                        <Checkbox
                          checked={perm.manage}
                          onClick={(e) => e.preventDefault()}
                          className="cursor-default border-white/20"
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Static Skeleton UI Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="grid grid-cols-5 gap-4 items-center"
                  >
                    <Skeleton className="h-6 w-24 bg-white/10" />
                    <div className="flex justify-center">
                      <Skeleton className="h-5 w-5 rounded bg-white/10" />
                    </div>
                    <div className="flex justify-center">
                      <Skeleton className="h-5 w-5 rounded bg-white/10" />
                    </div>
                    <div className="flex justify-center">
                      <Skeleton className="h-5 w-5 rounded bg-white/10" />
                    </div>
                    <div className="flex justify-center">
                      <Skeleton className="h-5 w-5 rounded bg-white/10" />
                    </div>
                  </motion.div>

                  {/* Role Summary */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-8 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
                  >
                    <div className="flex items-center gap-2 text-yellow-400 mb-2">
                      <Settings className="h-4 w-4" />
                      <span className="text-sm font-medium">Role Configuration</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Configure permissions for each role by selecting the appropriate access levels.
                      Use the checkboxes above to grant or restrict permissions for different areas of the platform.
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// InfoTooltip Component

interface InfoTooltipProps {
  children: React.ReactNode;
}

function InfoTooltip({ children }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-10 px-2 py-1 text-xs bg-black text-white rounded shadow-lg -top-8 left-1/2 transform -translate-x-1/2">
          {/* Tooltip content goes here */}
        </div>
      )}
    </div>
  );
}