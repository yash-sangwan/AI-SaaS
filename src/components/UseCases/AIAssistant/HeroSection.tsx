'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ChevronDown, ArrowRight, MessageSquare, Zap, Brain, Lightbulb, Users, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AIAssistantHeroSection() {
  const [inputValue, setInputValue] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: "Hello! I'm your AI assistant. How can I help you today?" },
    { type: 'ai', content: "You can ask me to generate content ideas, help with editing, or answer questions about your project." },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setChatMessages([...chatMessages, { type: 'user', content: inputValue }])
      setInputValue('')
      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { type: 'ai', content: "I'm processing your request. Give me a moment to generate a response." }])
      }, 1000)
    }
  }

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
              <a href="#" className="hover:text-white transition-colors">AI Assistant</a>
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
                  <Brain className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-3 py-1 md:px-4 md:py-2 rounded-lg bg-yellow-600/20 text-yellow-400 text-xs md:text-sm font-medium"
                >
                  AI-Powered
                </motion.div>
              </div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
              >
                Supercharge your workflow with{" "}
                <span className="bg-yellow-500/20 px-2 py-1 md:px-4 md:py-1 rounded-lg text-yellow-300">
                  AI Assistant
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8"
              >
                Harness the power of artificial intelligence to boost productivity, generate ideas,
                and streamline your content creation process like never before.
              </motion.p>

              {/* Feature List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 md:space-y-4 mb-6 md:mb-8"
              >
                {[
                  { icon: MessageSquare, text: "Natural language interactions" },
                  { icon: Zap, text: "Instant content suggestions" },
                  { icon: Sparkles, text: "AI-powered editing and refinement" },
                  { icon: Lightbulb, text: "Creative idea generation" }
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
                  Try AI Assistant
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
                  <div className="flex-1 text-center text-sm text-gray-400">AI Assistant</div>
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
                      <div className="p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                        <div className="flex items-center justify-between text-white/70">
                          <div className="flex items-center gap-3">
                            <Zap className="h-5 w-5" />
                            <span className='text-sm'>Automated Workflow</span>
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-yellow-500/20 cursor-pointer">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-3">
                            <MessageSquare className="h-5 w-5" />
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
                    <div className="flex flex-col h-[400px]">
                      <div className="flex-grow space-y-4 overflow-y-auto mb-4">
                        {/* AI Assistant Messages */}
                        {chatMessages.map((message, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-4 rounded-lg ${
                              message.type === 'ai' ? 'bg-yellow-500/10 text-yellow-300' : 'bg-white/5 text-white'
                            }`}
                          >
                            <p>{message.content}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Input Area */}
                      <div className="mt-auto">
                        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                          <Input
                            type="text"
                            readOnly
                            placeholder="Ask the AI Assistant..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-grow bg-white/10 border-white/20 text-white"
                          />
                          <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700">
                            <Send className="h-4 w-4" />
                          </Button>
                        </form>
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