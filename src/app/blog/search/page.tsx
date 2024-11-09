import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import BlogLayout from '@/components/Blog/BlogLayout'
import BlogPosts from '../../../components/Blog/BlogPosts'
import BlogSkeleton from '../../../components/Blog/BlogSkeleton'
import { searchPosts } from '@/lib/BlogAPI'

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q

  if (!query) {
    notFound()
  }

  const { posts, totalPages } = await searchPosts(query)

  return (
    <BlogLayout>
      <Suspense fallback={<BlogSkeleton />}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Search Results for "{query}"
          </h2>
          <p className="text-gray-400">Found {posts.length} results</p>
        </div>
        <BlogPosts 
          posts={posts} 
          currentPage={1} 
          totalPages={totalPages} 
        />
      </Suspense>
    </BlogLayout>
  )
}