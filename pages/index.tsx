import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'
import { Post } from '../models/Post.model'
import { getPosts } from '../services'

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="container mx-1 mb-8  px-10 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.slug} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  console.log('posts:', posts)
  return {
    props: { posts: posts.map(({ node }: any) => node) },
  }
}
