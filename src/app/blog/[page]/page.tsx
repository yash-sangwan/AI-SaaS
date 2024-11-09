import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import BlogLayout from '../../../components/Blog/BlogLayout'
import BlogPosts from '../../../components/Blog/BlogPosts'
import BlogSkeleton from '../../../components/Blog/BlogSkeleton'
import { getPosts } from '@/lib/BlogAPI'

export default async function BlogPaginatedPage({ 
  params 
}: { 
  params: { page: string } 
}) {
  const page = parseInt(params.page)
  
  // Redirect page 1 to main blog page
  if (page === 1) {
    return notFound()
  }

  const { posts, totalPages } = await getPosts(page)

  return (
    <div className="bg-gradient-to-br from-[#070314] to-[#0d0829] min-h-screen text-white">
      <BlogLayout>
        <Suspense fallback={<BlogSkeleton />}>
          <BlogPosts 
            posts={posts} 
            currentPage={page} 
            totalPages={totalPages} 
          />
        </Suspense>
      </BlogLayout>
    </div>
  )
}