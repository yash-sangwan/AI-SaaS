export interface Post {
    id: number
    title: string
    slug: string
    excerpt: string
    content?: string
    category: string
    image: string
    date: string
    readingTime: string
  }