import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types/blog'
import Pagination from './Pagination'

interface BlogPostsProps {
  posts: Post[]
  currentPage: number
  totalPages: number
}

export default function BlogPosts({ posts, currentPage, totalPages }: BlogPostsProps) {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
        Discover Our Latest Posts
      </h2>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white bg-opacity-5 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
            <Link href={`/blog/post/${post.slug}`}>
              <div className="relative h-48 sm:h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <span className="text-sm text-gray-400">{post.readingTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-300 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}