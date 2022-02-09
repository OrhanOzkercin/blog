import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { Post } from '../models/Post.model'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="mb-8 rounded-lg bg-gray-800/20 p-0 pb-12 shadow-lg shadow-black lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-80 w-full rounded-t object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-500 hover:text-yellow-500">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full"
          />
          <p className="ml-2 inline align-middle text-lg">{post.author.name}</p>
        </div>
        <div className="flex  items-center justify-center font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="25"
            height="25"
            viewBox="0 0 512 512"
            fill="#eab308"
            className="mr-2 "
          >
            <title />
            <g id="icomoon-ignore"></g>
            <path d="M329.372 374.628l-105.372-105.373v-141.255h64v114.745l86.628 86.627zM256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM256 448c-106.039 0-192-85.961-192-192s85.961-192 192-192c106.039 0 192 85.961 192 192s-85.961 192-192 192z" />
          </svg>
          <span>{moment(post.createdAt).format('DD/MM/YYYY')}</span>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-lg font-normal lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`posts/${post.slug}`}>
          <span className="inline-block transform cursor-pointer rounded-full bg-yellow-500 px-8 py-4 text-lg font-bold text-slate-900 transition duration-500 hover:-translate-y-1">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
