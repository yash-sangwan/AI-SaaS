"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from 'lucide-react'

interface VideoCardProps {
  title: string
  author: {
    name: string
    handle: string
    avatar: string
  }
  image: string
}

function VideoCard({ title, author, image }: VideoCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full">
      <div className="relative aspect-video">
        <img
          alt={title}
          className="object-cover w-full h-full"
          height={450}
          src={image}
          width={800}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="rounded-full bg-red-500 p-2 sm:p-3 cursor-pointer hover:bg-red-600 transition-colors">
            <Play className="h-4 w-4 sm:h-6 sm:w-6 text-white" fill="white" />
          </div>
        </div>
      </div>
      <CardHeader className="flex flex-row items-center gap-3 p-2 sm:p-4">
        <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
          <AvatarImage alt={author.name} src={author.avatar} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-xs sm:text-sm text-white">{title}</CardTitle>
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <span>{author.name}</span>
            <span>·</span>
            <span>{author.handle}</span>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

interface TestimonialProps {
  author: {
    name: string
    role: string
    avatar: string
  }
  content: string
}

function TestimonialCard({ author, content }: TestimonialProps) {
  return (
    <Card className="bg-white/5 border-zinc-800 h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-3 p-2 sm:p-4">
        <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
          <AvatarImage alt={author.name} src={author.avatar} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="font-semibold text-xs sm:text-sm text-white">{author.name}</div>
          <div className="text-xs text-zinc-400">{author.role}</div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-2 sm:p-4">
        <p className="text-zinc-300 text-xs sm:text-sm">{content}</p>
      </CardContent>
    </Card>
  )
}

export default function CreatorBoxes() {
  const testimonials = [
    {
      author: {
        name: "Dennis Dao",
        role: "Distinguished Software Architect, MISSION+",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content:
        "What I love most is its Markdown note-taking feature, which allows you to include snapshots of diagrams directly in the canvas. Clicking on these snapshots takes you straight to the relevant diagram section.",
    },
    {
      author: {
        name: "Alex Kenley",
        role: "Technical Director, Mott Mac",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content:
        "As a proof of concept, using Eraser I manually built out a VMWare validated design which is a fairly complex conceptual design for NSX-T Network Virtualization in an enterprise environment. ... I put this whole thing together in under an hour. Pretty wild.",
    },
    {
      author: {
        name: "Fernando Borretti",
        role: "Software engineer @ Mailspace",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content:
        "I've recently started using eraser.io and it's simply delightful: the best of Graphviz and Figma and code-to-diagrams in a neat UI.",
    },
    {
      author: {
        name: "Terrance Bryant",
        role: "Founder, SideTechs",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content:
        "All of the things that I was doing in 15 different places all in one place. It makes my architecture job easier. And committing back to the codebase is great.",
    },
  ]

  const videos = [
    {
      title: "What does larger scale software development look like?",
      author: {
        name: "Web Dev Cody",
        handle: "@WebDevCody",
        avatar: "https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s160-c-k-c0x00ffffff-no-rj",
      },
      image: "https://i.ytimg.com/vi/4hEDKrIM724/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2zY4-sWHQwlxDKblKvz7Ua8xdWA",
    },
    {
      title: "Building Large Scale Microservice Applications",
      author: {
        name: "Code with Harry",
        handle: "@codewithharry",
        avatar: "https://yt3.googleusercontent.com/ytc/AIdro_m05oPc8I5nhz_ej6JdKoxA6vglaI76AMqtDELBj1s2o0o=s160-c-k-c0x00ffffff-no-rj",
      },
      image: "https://i.ytimg.com/vi/mkHgwPkfqmw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsrwXoLXMPz1_kp3qXR5uH5OXmmA",
    },
    {
      title: "Building Large Scale Microservice Applications",
      author: {
        name: "TomDoesTech",
        handle: "@TomDoesTech",
        avatar: "https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s160-c-k-c0x00ffffff-no-rj",
      },
      image: "https://i.ytimg.com/vi/VjzEeTBaysI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEhlMkKZjPNGDT4fHs9IYf67Vctw",
    },
  ]

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-[#220a35] to-[#070314] min-h-screen flex justify-center items-start">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl w-full">
        {/* First row */}
        <div className="sm:col-span-1">
          <TestimonialCard {...testimonials[0]} />
        </div>
        <div className="sm:col-span-1">
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <VideoCard {...videos[0]} />
        </div>
        <div className="sm:col-span-1">
          <TestimonialCard {...testimonials[1]} />
        </div>

        {/* Second row */}
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <VideoCard {...videos[1]} />
        </div>
        <div className="sm:col-span-1">
          <TestimonialCard {...testimonials[2]} />
        </div>
        <div className="sm:col-span-2">
          <TestimonialCard {...testimonials[3]} />
        </div>

        {/* Third row */}
        <div className="sm:col-span-1">
          <TestimonialCard {...testimonials[0]} />
        </div>
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-2">
          <VideoCard {...videos[2]} />
        </div>
        <div className="sm:col-span-1">
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="sm:col-span-1">
          <TestimonialCard {...testimonials[1]} />
        </div>
      </div>
    </div>
  )
}