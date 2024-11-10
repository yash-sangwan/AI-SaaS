import SearchBar from './SearchBar'
import TopStories from './TopStories'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-[#070314] to-[#0d0829] via-[#0a061c] bg-[length:200%_200%] bg-[center_bottom] min-h-screen text-white pb-20">
      {/* after Hero Section Component Here */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {children}
          </div>
          <aside className="md:col-span-1">
            <div className="sticky top-3 space-y-8">
              <SearchBar />
              <TopStories />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}