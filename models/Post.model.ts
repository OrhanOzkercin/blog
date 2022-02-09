import Author from './Author.model'
import Category from './Category.model'

export interface Post {
  createdAt: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: { url: string }
  isFeaturedPost: boolean
  author: Author
  categories: Category
}
