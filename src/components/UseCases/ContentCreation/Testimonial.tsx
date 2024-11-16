import CustomizableTestimonials from '@/components/LandingPage/Testimonials/TestimonialComponent'

export default function Testimonial() {
  const testimonials = [
    {
      quote: "The AI-powered content suggestions have revolutionized our content strategy. We're creating twice the content in half the time, with better engagement metrics than ever.",
      author: "Sarah Chen",
      role: "Content Director at TechFlow Digital",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote: "The automated scheduling and analytics insights have transformed how we approach content distribution. It's like having an entire data science team at your fingertips.",
      author: "Marcus Rodriguez",
      role: "Marketing Lead at GrowthWise",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote: "From ideation to publication, the AI suite has streamlined our entire content workflow. The smart recommendations and trend analysis are game-changing.",
      author: "Emma Thompson",
      role: "Editorial Manager at ContentPro",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote: "Our team's productivity has soared since adopting this AI-powered platform. It's not just about efficiency; the quality of our content has improved dramatically.",
      author: "Alex Patel",
      role: "Head of Digital Strategy at InnovateCo",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote: "The personalized content suggestions have helped us connect with our audience on a deeper level. Our engagement rates have never been higher.",
      author: "Olivia Foster",
      role: "Community Manager at SocialBoost",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote: "As a small business owner, this tool has been a game-changer. It's like having a full-time content team at a fraction of the cost.",
      author: "Daniel Lee",
      role: "Founder of GrowthHacks",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  return (
    <CustomizableTestimonials 
      testimonials={testimonials}
      bgGradient="bg-[#070314]"
      titleGradient="bg-[#C084FC]"
      
    />
  )
}