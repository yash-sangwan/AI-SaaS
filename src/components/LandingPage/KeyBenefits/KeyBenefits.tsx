import Image from "next/image"
import { Brain, Calendar, Users } from 'lucide-react'
import { assets } from "@/Assets/Assets"

export default function KeyBenefits() {
  return (
    <section className="py-16 px-4 md:py-24 bg-[#070314] text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center mb-16 text-4xl font-bold">
          <span className="text-white">What makes </span>
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent">
            ContentAI great?
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* AI-Powered Content Creation */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-600/20 p-4 mb-4">
              <Brain className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Content Creation</h3>
            <p className="text-gray-300 text-sm mb-4 h-20">
              Our AI Assistant streamlines your content creation process, generating high-quality posts and captions tailored to your brand voice.
            </p>
            <div className="w-full p-4 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-center space-x-3 mb-2">
                <Image
                  src={assets.lp_herosection_profileicon}
                  alt="Sarah Chen"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-sm">Sarah Chen</p>
                  <p className="text-xs text-gray-400">TechFlow Digital</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "The AI-powered content creation has transformed our workflow. We're producing more engaging content in half the time."
              </p>
            </div>
          </div>

          {/* Smart Scheduling and Analytics */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-yellow-600/20 p-4 mb-4">
              <Calendar className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Scheduling and Analytics</h3>
            <p className="text-gray-300 text-sm mb-4 h-20">
              Optimize your content strategy with AI-driven scheduling and in-depth analytics, ensuring maximum engagement across all your social platforms.
            </p>
            <div className="w-full p-4 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-center space-x-3 mb-2">
                <Image
                  src={assets.lp_herosection_profileicon}
                  alt="Marcus Rodriguez"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-sm">Marcus Rodriguez</p>
                  <p className="text-xs text-gray-400">Growth Marketing Co</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "The smart scheduling and analytics features have significantly improved our content performance and ROI across all channels."
              </p>
            </div>
          </div>

          {/* Collaborative Workflow */}
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-pink-600/20 p-4 mb-4">
              <Users className="w-10 h-10 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Workflow</h3>
            <p className="text-gray-300 text-sm mb-4 h-20">
              Enhance team productivity with our automated workflow and collaborative tools, streamlining your content management process from ideation to publication.
            </p>
            <div className="w-full p-4 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-center space-x-3 mb-2">
                <Image
                  src={assets.lp_herosection_profileicon}
                  alt="Emma Watson"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-sm">Emma Watson</p>
                  <p className="text-xs text-gray-400">Insight Analytics</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "The collaborative workflow features have revolutionized how our team works together. Our content creation process is now seamless and efficient."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}