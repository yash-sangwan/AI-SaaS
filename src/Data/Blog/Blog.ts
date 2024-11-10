export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readingTime: string;
  slug: string;
}

export const featuredPost: BlogPost = {
  id: 1,
  title: "Unveiling The Majestic Beauty Of Mount Fuji",
  excerpt: "A Journey To Japan's Iconic Symbol And Natural Wonder. Discover The Rich History, Breathtaking Landscapes, And Cultural Significance Of This Towering Peak.",
  category: "TRAVEL",
  image: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  date: "May 28, 2023",
  readingTime: "5 min read",
  slug: "unveiling-the-majestic-beauty-of-mount-fuji" 
};

export const topStories: BlogPost[] = [
  {
    id: 2,
    title: "Autumn Bliss: A Couple's Stroll Through Vibrant Forests",
    image: "https://images.pexels.com/photos/29187003/pexels-photo-29187003/free-photo-of-couple-strolling-through-a-vibrant-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "Jan 24, 2023",
    category: "LIFESTYLE",
    excerpt: "Experience the magic of autumn as we follow a couple's journey through colorful forests.",
    readingTime: "3 min read",
    slug: "autumn-bliss-couples-stroll-through-vibrant-forests" 
  },
  {
    id: 3,
    title: "Urban Exploration: Discovering Hidden Gems in City Streets",
    image: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "Feb 15, 2023",
    category: "TRAVEL",
    excerpt: "Uncover the secrets of urban landscapes as we explore the lesser-known corners of bustling cities.",
    readingTime: "4 min read",
    slug: "urban-exploration-discovering-hidden-gems-in-city-streets" 
  },
  {
    id: 4,
    title: "Moonlit Serenity: Nature's Nocturnal Symphony",
    image: "https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "Mar 3, 2023",
    category: "NATURE",
    excerpt: "Immerse yourself in the tranquil beauty of nighttime landscapes and the wonders of the natural world after dark.",
    readingTime: "3 min read",
    slug: "moonlit-serenity-natures-nocturnal-symphony" 
  }
];

export const carouselItems = [
  {
    id: 1,
    title: "Exploring the Wonders of Hiking",
    category: "Destination",
    date: "24 Jan 2024",
    readTime: "10 mins read",
    image: "https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "An iconic landmarks, this post unveils the secrets that make this destination a traveler's paradise."
  },
  {
    id: 2,
    title: "Mountain Adventures Await",
    category: "Travel",
    date: "22 Jan 2024",
    readTime: "8 mins read",
    image: "https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Discover breathtaking peaks and valleys in this comprehensive guide to mountain exploration."
  },
  {
    id: 3,
    title: "Urban Photography Guide",
    category: "Photography",
    date: "20 Jan 2024",
    readTime: "12 mins read",
    image: "https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Master the art of capturing city life through your lens with our expert tips."
  }
]