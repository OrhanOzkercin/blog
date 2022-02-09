import React from 'react'

interface Props {
  post: {
    title: string
    excerpt: string
  }
}

const PostCard = ({ post }: Props) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
