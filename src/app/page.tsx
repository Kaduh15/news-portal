import Article from '@/components/Article'
import SelectApi from '@/components/SelectApi'
import { createApi } from '@/helper/api'

export default async function Home() {
  const api = await createApi('gnews')

  const result = await api.getArticles()

  return (
    <>
      <header className="w-full border-b border-zinc-300 p-8">
        <h1 className="text-3xl font-bold">Latest News</h1>
        <SelectApi />
      </header>

      <main className="mt-8 flex flex-wrap justify-evenly gap-x-5 px-5">
        {result.map((news) => {
          return <Article key={news.url} {...news} />
        })}
      </main>
    </>
  )
}
