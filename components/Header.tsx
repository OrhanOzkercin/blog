import Link from 'next/link'
import React from 'react'

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web dev', slug: 'web-dev' },
]

function Header() {
  console.log(categories)

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-slate-700 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold ">
              Orhan Özkerçin Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => {
            return (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold md:float-right">
                  {category.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
