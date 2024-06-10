import Image from 'next/image'
import Link from 'next/link'

import { type Article as TArticle } from '@/helper/api/api'

type ArticleProps = object & TArticle

export default function Article(article: ArticleProps) {
  return (
    <article className="mx-auto my-4 min-w-20 max-w-96 rounded-md border border-gray-200 p-6 shadow-md">
      <h2 className="text-xl font-bold">{article.title}</h2>
      {article.image && (
        <div className="mt-4">
          <Image
            src={article.image}
            alt={article.title}
            width={300}
            height={300}
            className="w-full"
          />
        </div>
      )}
      <p className="mt-4 text-lg">{article.description}</p>
      <div className="flex items-center justify-between">
        <Link
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 block text-blue-500 hover:underline"
        >
          Ler mais
        </Link>
        <p className="pt-4 text-end text-sm text-gray-500">
          {article.publishedAt}
        </p>
      </div>
    </article>
  )
}
