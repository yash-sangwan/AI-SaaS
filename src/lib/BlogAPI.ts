import { Post } from '@/types/blog'
import { topStories } from '@/Data/Blog/Blog'

const POSTS_PER_PAGE = 10

export async function getPosts(page: number = 1) {
  try {
    // Replace this with your actual API call
    const response = await fetch(`/api/posts?page=${page}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    
    // Fallback to demo data
    return getFallbackPosts(page)
  }
}

export async function searchPosts(query: string) {
  try {
    // Replace this with your actual API call
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
    
    if (!response.ok) {
      throw new Error('Failed to search posts')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error searching posts:', error)
    
    // Fallback to demo data
    const allPosts = getFallbackPosts(1, 5).posts
    const filteredPosts = allPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    )
    
    return {
      posts: filteredPosts.slice(0, POSTS_PER_PAGE),
      totalPages: Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
    }
  }
}

export async function getPostBySlug(slug: string) {
  try {
    // Replace this with your actual API call
    const response = await fetch(`/api/posts/${slug}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch post')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching post:', error)
    
    // Fallback to demo data
    const allPosts = getFallbackPosts(1, 5).posts
    return allPosts.find(post => post.slug === slug)
  }
}

function getFallbackPosts(page: number, totalPosts: number = 5) {
  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  
  // Generate demo posts based on the top stories template
  const demoPosts = Array.from({ length: totalPosts }, (_, i) => ({
    ...topStories[i % topStories.length],
    id: i + 1,
    title: `Demo Post ${i + 1}: ${topStories[i % topStories.length].title}`,
    slug: `demo-post-${i + 1}`,
    content: `This is the full content of demo post ${i + 1}. It would typically be much longer and contain formatted text, images, and other media.`
  }))
  
  return {
    posts: demoPosts.slice(startIndex, endIndex),
    totalPages: Math.ceil(totalPosts / POSTS_PER_PAGE),
  }
}