"use client";
import { useState } from "react";
import {
  Plus,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  History,
  BarChart2,
  Calendar,
  Sparkles,
  Search,
  Hash,
  MessageSquare,
  Bell,
  Settings,
  User,
  PlusCircle,
  Image as ImageIcon,
  Video,
  Mic,
  Menu,
  X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  FaPen,
  FaPinterest,
  FaPinterestP,
  FaTiktok,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { assets } from "@/Assets/Assets";
import Image from "next/image";


export function DashboardPreview() {
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto mt-16">
      {/* Dashboard Description */}

      <div className="text-center mb-8">
        {/* <h3 className="text-xl font-medium text-white mb-2">All-in-One Creator Dashboard</h3>
        <p className="text-zinc-400">Manage content, schedule posts, and get AI assistance across all your channels</p> */}
      </div>

      {/* macOS-style window */}
      <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">

        <div className="h-10 bg-zinc-800 flex items-center justify-between px-3 rounded-t-xl">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center space-x-2">
            <div className={` text-xs text-zinc-400 font-medium`}>
              Creator's Dashboard
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
                <path d="M5 5V0H7V5H12V7H7V12H5V7H0V5H5Z" fill="currentColor" />
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

        <div className="flex h-[750px] border-t border-white/10">
          {/* Left Sidebar (Discord-style) */}
          <div className="w-20 bg-zinc-900 flex flex-col items-center gap-4 p-3 border-r border-white/10">
            {/* User Avatar */}
            <Avatar className="w-12 h-12">
              <Image
                src={assets.lp_herosection_profileicon}
                alt="Profile Icon"
              />{" "}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Channel 1 */}
            <div className="space-y-4">
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-white before:-ml-3 before:rounded-full">
                    <Hash className="w-6 h-6 text-white" />
                  </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <FaYoutube className="w-7 h-7 text-red-600" />
                </div>
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  < X className="w-6 h-6 text-sky-500"/>
                </div>
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <FaPinterestP className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>

            {/* Channel 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Hash className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-blue-500" />
                </div>
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <FaTiktok className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Add Channel Button */}
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
                      className="text-zinc-400 hover:text-white hover:bg-white/10 rounded-full px-4"
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
                      className="text-white bg-white/10 rounded-full px-4"
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
                  {/* Quick Actions */}
                  <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                    <h4 className="text-sm font-medium text-zinc-300 mb-4">
                      Quick Actions
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button
                        variant="outline"
                        className="flex flex-col items-center justify-center h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-0"
                      >
                        <PlusCircle className="w-9 h-9 mb-2 text-purple-400" />
                        <span className="text-gray-700">Create Content</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex flex-col items-center justify-center h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border-0"
                      >
                        <ImageIcon className="w-9 h-9 mb-2 text-blue-400" />
                        <span className="text-gray-700">Upload Media</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex flex-col items-center justify-center h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 hover:from-orange-500/20 hover:to-red-500/20 border-0"
                      >
                        <FaPen className="w-9 h-9 mb-2 text-orange-400" />{" "}
                        {/* Draft Post icon */}
                        <span className="text-gray-700">Draft Post</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex flex-col items-center justify-center h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 border-0"
                      >
                        <FaUsers className="w-9 h-9 mb-2 text-green-400" />{" "}
                        {/* Collaborate icon */}
                        <span className="text-gray-700">Collaborate</span>
                      </Button>
                    </div>
                  </div>

                  {/* Scheduled Content */}
                  <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                    <h4 className="text-sm font-medium text-zinc-300 mb-4">
                      Scheduled Content
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Youtube className="w-5 h-5 text-red-500" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">
                            How to Use AI in Content Creation
                          </div>
                          <div className="text-xs text-zinc-400">
                            Scheduled for tomorrow, 2:00 PM
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-zinc-600 bg-zinc-700 text-white hover:text-white"
                        >
                          Edit
                        </Button>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Twitter className="w-5 h-5 text-sky-500" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">
                            Twitter Space: Creator Economy
                          </div>
                          <div className="text-xs text-zinc-400">
                            Scheduled for next week, Monday 7:00 PM
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-zinc-600 bg-zinc-700 text-white hover:text-white"
                        >
                          Edit
                        </Button>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors">
                        <Instagram className="w-5 h-5 text-pink-500" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">
                            Behind the Scenes: Studio Tour
                          </div>
                          <div className="text-xs text-zinc-400">
                            Scheduled for next week, Wednesday 1:00 PM
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-zinc-600 bg-zinc-700 text-white hover:text-white"
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Overview */}
                  <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                    <h4 className="text-sm font-medium text-zinc-300 mb-4">
                      Analytics Overview
                    </h4>
                    <div className="space-y-4">
                      <div className="h-8 bg-zinc-800 rounded animate-pulse" />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* <div className="h-20 bg-zinc-800 rounded animate-pulse" />
                        <div className="h-20 bg-zinc-800 rounded animate-pulse" />
                        <div className="h-20 bg-zinc-800 rounded animate-pulse" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Assistant Panel (hidden on small screens) */}
              <div className="hidden lg:flex w-80 border-l border-white/10 bg-zinc-900 flex-col">
                <div className="p-4 border-b border-white/10">
                  <h4 className="text-sm font-medium text-zinc-300">
                    AI Assistant
                  </h4>
                </div>
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="flex flex-row-reverse gap-3">
                      <Avatar className="w-8 h-8">
                        <Image
                          src={assets.lp_herosection_profileicon}
                          alt="Profile Icon"
                        />{" "}
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 p-3 rounded-lg bg-zinc-800">
                        <p className="text-sm text-zinc-300">
                          Can you help me brainstorm content ideas for my tech
                          channel?
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/ai-assistant.png" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 p-3 rounded-lg bg-zinc-800/50">
                        <p className="text-sm text-zinc-300">
                          Here are some content ideas for your tech channel:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-zinc-400 list-disc list-inside">
                          <li>Latest AI advancements and their impact</li>
                          <li>Comparison of new smartphone releases</li>
                          <li>Beginner's guide to coding with Python</li>
                          <li>Tech gadgets that boost productivity</li>
                          <li>Future of VR and AR technologies</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-row-reverse gap-3">
                      <Avatar className="w-8 h-8">
                        <Image
                          src={assets.lp_herosection_profileicon}
                          alt="Profile Icon"
                        />{" "}
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 p-3 rounded-lg bg-zinc-800">
                        <p className="text-sm text-zinc-300">
                          These are great! Can you expand on the AI advancements
                          topic?
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/ai-assistant.png" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 p-4 rounded-lg bg-zinc-800/50">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask anything..."
                      readOnly
                      className="flex-1 bg-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button size="icon" className="rounded-full bg-zinc-800 items-center hover:bg-emerald-600">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Button (visible on small screens) */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 lg:hidden rounded-full bg-zinc-800 border-white/10 text-white"
        onClick={() => setIsAIAssistantOpen(true)}
      >
        <Sparkles className="w-5 h-5" />
      </Button>

      {/* AI Assistant Sheet (for small screens) */}
      <Sheet open={isAIAssistantOpen} onOpenChange={setIsAIAssistantOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">AI Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAIAssistantOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <ScrollArea className="flex-1">
              <div className="space-y-4">
                <div className="flex flex-row-reverse gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 p-3 rounded-lg bg-zinc-800">
                    <p className="text-sm text-zinc-300">
                      Can you help me brainstorm content ideas for my tech
                      channel?
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/ai-assistant.png" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 p-3 rounded-lg bg-zinc-800/50">
                    <p className="text-sm text-zinc-300">
                      Here are some content ideas for your tech channel:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-400 list-disc list-inside">
                      <li>Latest AI advancements and their impact</li>
                      <li>Comparison of new smartphone releases</li>
                      <li>Beginner's guide to coding with Python</li>
                      <li>Tech gadgets that boost productivity</li>
                      <li>Future of VR and AR technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="mt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask anything..."
                  className="flex-1 bg-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button size="icon" className="rounded-full">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
