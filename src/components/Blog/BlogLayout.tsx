import SearchBar from './SearchBar'
import TopStories from './TopStories'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-[#070314] to-[#0d0829] min-h-screen text-white pb-20">
      {/* Hero Section Component Here */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="md:col-span-2">
            {children}
          </div>
          <div className="md:sticky md:top-8 space-y-8 h-fit">
            <SearchBar />
            <TopStories />
          </div>
        </div>
      </div>
    </div>
  )
}