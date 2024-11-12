import Image from 'next/image'
import { notFound } from 'next/navigation'
import BlogLayout from '@/components/Blog/BlogLayout'
import { getPostBySlug } from '@/lib/BlogAPI'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <BlogLayout>
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-gray-400 mb-4">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="relative h-64 sm:h-96 mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          {post.content}
        </div>
      </article>
    </BlogLayout>
  )
}

export async function generateStaticParams() {
  // This function would typically fetch all post slugs from your API
  // For demo purposes, we'll return a few static slugs
  return [
    { slug: 'demo-post-1' },
    { slug: 'demo-post-2' },
    { slug: 'demo-post-3' },
  ]
}