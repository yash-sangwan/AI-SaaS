"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  Calendar,
  Bell,
  Settings,
  Image as Menu,
  X,
  Hash,
  History,
  BarChart2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { assets } from "@/Assets/Assets";
import Image from "next/image";
import { Plus } from "lucide-react";

export default function ContentManagement() {
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#070314] min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl mx-auto">
          {/* Top Icons */}
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-12 w-12 rounded-xl bg-pink-600/20 flex items-center justify-center"
            >
              <Layers className="h-6 w-6 text-pink-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-4 py-2 rounded-lg bg-pink-600/20 text-pink-400 text-sm font-medium"
            >
              Content Management
            </motion.div>
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Manage content from{" "}
            <span className="bg-pink-500/20 px-4 py-1 rounded-lg text-pink-300">
              one place
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Centralize your content management and gain insights across all your
            social platforms. Streamline your workflow and boost your social
            media presence.
          </motion.p>

          {/* Main Dashboard Area */}
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="h-10 bg-zinc-800 flex items-center justify-between px-3 rounded-t-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-zinc-400 font-medium">
                    Content Management
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-zinc-400 hover:text-zinc-300">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 5V0H7V5H12V7H7V12H5V7H0V5H5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="text-zinc-400 hover:text-zinc-300">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H5V2H2V5H0V0ZM2 10H5V12H0V7H2V10ZM10 7H12V12H7V10H10V7ZM7 0H12V5H10V2H7V0Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex h-[850px] border-t border-white/10">
              {/* Left Sidebar */}
              <div className="w-20 bg-zinc-900 flex flex-col items-center gap-4 p-3 border-r border-white/10">
                <Avatar className="w-12 h-12">
                  <Image
                    src={assets.lp_herosection_profileicon}
                    alt="Profile Icon"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="space-y-4 mt-2">
                  <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-white before:-ml-3 before:rounded-full">
                    <Hash className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                      <FaYoutube className="w-7 h-7 text-red-600" />
                    </div>
                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                      <X className="w-6 h-6 text-sky-500" />
                    </div>
                    <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                      <FaPinterestP className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Hash className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <FaInstagram className="w-6 h-6 text-pink-500" />
                      </div>
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <FaLinkedinIn className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                        <FaTiktok className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-12 h-12 border-2 border-dashed border-zinc-700 rounded-xl flex items-center justify-center hover:border-zinc-500 transition-colors mt-auto">
                  <Plus className="w-6 h-6 text-zinc-500" />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-zinc-950">
                {/* Top Navigation */}
                <div className="border-b border-white/10 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
                  <div className="flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-4">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="lg:hidden text-zinc-400 hover:text-white"
                          >
                            <Menu className="w-5 h-5" />
                          </Button>
                        </SheetTrigger>
                        <SheetContent
                          side="left"
                          className="w-[300px] sm:w-[400px]"
                        >
                          <nav className="flex flex-col space-y-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="justify-start"
                            >
                              <BarChart2 className="w-4 h-4 mr-2" />
                              Analytics
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="justify-start"
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="justify-start"
                            >
                              <Sparkles className="w-4 h-4 mr-2" />
                              AI Assistant
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="justify-start"
                            >
                              <History className="w-4 h-4 mr-2" />
                              History
                            </Button>
                          </nav>
                        </SheetContent>
                      </Sheet>
                      <nav className="hidden lg:flex space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white bg-white/10 rounded-full px-4"
                        >
                          <BarChart2 className="w-4 h-4 mr-2" />
                          Analytics
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-zinc-400 hover:text-white hover:bg-white/10 rounded-full px-4"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-zinc-400 hover:text-white hover:bg-white/10 rounded-full px-4"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          AI Assistant
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-zinc-400 hover:text-white hover:bg-white/10 rounded-full px-4"
                        >
                          <History className="w-4 h-4 mr-2" />
                          History
                        </Button>
                      </nav>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-zinc-400 hover:text-black rounded-full"
                      >
                        <Bell className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-zinc-400 hover:text-black rounded-full"
                      >
                        <Settings className="w-5 h-5" />
                      </Button>
                      <Avatar className="w-8 h-8">
                        <Image
                          src={assets.lp_herosection_profileicon}
                          alt="Profile Icon"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex overflow-hidden">
                  <div className="flex-1 p-6 overflow-auto">
                    <div className="space-y-6">
                      {/* Platform Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                              <FaYoutube className="w-5 h-5 text-red-500" />
                              <h3 className="text-lg font-semibold text-white">
                                YouTube
                              </h3>
                            </div>
                            <span className="text-zinc-400">
                              125K followers
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-zinc-400">
                                Engagement Rate
                              </span>
                              <span className="text-white">78%</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2">
                              <div
                                className="bg-red-500 h-2 rounded-full"
                                style={{ width: "78%" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                              <X className="w-5 h-5 text-sky-500" />
                              <h3 className="text-lg font-semibold text-white">
                                Twitter
                              </h3>
                            </div>
                            <span className="text-zinc-400">
                              45.2K followers
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-zinc-400">
                                Engagement Rate
                              </span>
                              <span className="text-white">62%</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2">
                              <div
                                className="bg-sky-500 h-2 rounded-full"
                                style={{ width: "62%" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                              <FaPinterestP className="w-5 h-5 text-red-500" />
                              <h3 className="text-lg font-semibold text-white">
                                Pinterest
                              </h3>
                            </div>
                            <span className="text-zinc-400">
                              32.1K followers
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-zinc-400">
                                Engagement Rate
                              </span>
                              <span className="text-white">45%</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-2">
                              <div
                                className="bg-red-500 h-2 rounded-full"
                                style={{ width: "45%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AI Insights */}
                      <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-white">
                            AI Content Insights
                          </h4>
                          <Sparkles className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="space-y-4">
                          <div className="p-3 rounded-lg bg-zinc-900">
                            <p className="text-white text-sm">
                              Based on your analytics, here are some content
                              recommendations:
                            </p>
                            <ul className="mt-2 space-y-2 text-sm text-zinc-400">
                              <li>
                                • Your AI-related content performs 43% better
                                than other topics
                              </li>
                              <li>
                                • Best posting time for engagement is between
                                2-4 PM EST
                              </li>
                              <li>
                                • Tutorial-style videos average 2.5x more views
                              </li>
                            </ul>
                          </div>
                          <div className="p-4 rounded-lg bg-zinc-900">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75" />
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150" />
                              <span className="text-zinc-400 text-sm">
                                AI is analyzing your recent content...
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Performance */}
                      <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Content Performance
                        </h3>
                        <div className="space-y-4">
                          <h4 className="text-lg text-white">
                            Top Performing Posts
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900">
                              <div className="flex items-center gap-3">
                                <FaYoutube className="w-5 h-5 text-red-500" />
                                <span className="text-white">
                                  How to Use AI in Content Creation
                                </span>
                              </div>
                              <span className="text-zinc-400">45.2K views</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900">
                              <div className="flex items-center gap-3">
                                <FaPinterestP className="w-5 h-5 text-red-500" />
                                <span className="text-white">
                                  Behind the Scenes: Studio Tour
                                </span>
                              </div>
                              <span className="text-zinc-400">32.8K views</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900">
                              <div className="flex items-center gap-3">
                                <X className="w-5 h-5 text-sky-500" />
                                <span className="text-white">
                                  Twitter Space: Creator Economy
                                </span>
                              </div>
                              <span className="text-zinc-400">28.5K views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
