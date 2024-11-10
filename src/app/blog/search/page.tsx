import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import BlogLayout from '@/components/Blog/BlogLayout'
import BlogPosts from '../../../components/Blog/BlogPosts'
import BlogSkeleton from '../../../components/Blog/BlogSkeleton'
import { Button } from "@/components/ui/button"
import { searchPosts } from '@/lib/BlogAPI'
import { assets } from '@/Assets/Assets'

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q

  if (!query) {
    notFound()
  }

  const { posts, totalPages } = await searchPosts(query)

  if (posts.length === 0) {
    return (
      <BlogLayout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Whoops, No Results Found
              </h1>
              <p className="text-muted-foreground text-lg">
                We couldn't find any blog matching " {query} ". Try searching with different keywords.
              </p>
            </div>
            
            <div className="relative w-full max-w-[600px] h-[400px]">
              <Image
                src={assets.notfound}
                alt="Illustration of a character looking through binoculars"
                width={600}
                height={400}
                className="object-contain"
                priority
              />
            </div>

            <Button asChild className="w-full max-w-[200px] mt-10 bg-zinc-500 text-white hover:bg-zinc-800">
              <Link href="/blog">
                Back to Home? 
              </Link>
            </Button>
          </div>
        </div>
      </BlogLayout>
    )
  }

  return (
    <BlogLayout>
      <Suspense fallback={<BlogSkeleton />}>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Search Results for "{query}"
          </h2>
          <p className="text-muted-foreground">Found {posts.length} results</p>
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