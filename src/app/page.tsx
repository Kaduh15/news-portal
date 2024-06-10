import Article from '@/components/Article'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { createApi } from '@/helper/api'

export default async function Home() {
  const api = await createApi('news')

  const result = await api.getArticles()

  return (
    <>
      <header className="flex w-full items-center justify-between border-b border-zinc-300 p-8">
        <h1 className="text-3xl font-bold">Latest News</h1>
        <ModeToggle />
      </header>

      <main className="mt-8 flex flex-wrap justify-evenly gap-x-5 px-5">
        {result.map((news) => {
          return <Article key={news.url} {...news} />
        })}
      </main>
    </>
  )
}
