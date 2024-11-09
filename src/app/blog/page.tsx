import { Suspense } from 'react'
import HeroSection from '../../components/Blog/HeroSection'
import BlogLayout from '../../components/Blog/BlogLayout'
import BlogPosts from '../../components/Blog/BlogPosts'
import BlogSkeleton from '../../components/Blog/BlogSkeleton'
import { getPosts } from '@/lib/BlogAPI'

export default async function BlogPage() {
  const { posts, totalPages } = await getPosts(1) // Start with first page

  return (
    <div className="bg-gradient-to-br from-[#070314] to-[#0d0829] min-h-screen text-white">
      <HeroSection />
      <BlogLayout>
        <Suspense fallback={<BlogSkeleton />}>
          <BlogPosts 
            posts={posts} 
            currentPage={1} 
            totalPages={totalPages} 
          />
        </Suspense>
      </BlogLayout>
    </div>
  )
}