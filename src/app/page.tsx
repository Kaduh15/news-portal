import Article from '@/components/Article'
import SelectApi from '@/components/SelectApi'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Apis, createApi } from '@/helper/api'

type HomeProps = { searchParams?: { api?: Apis } }

export default async function Home({ searchParams }: HomeProps) {
  const apiSelect = await createApi(searchParams?.api || 'gnews')

  const result = await apiSelect.getArticles()

  return (
    <>
      <header className="flex w-full items-center justify-between border-b border-zinc-300 p-8">
        <h1 className="text-3xl font-bold">Latest News</h1>
        <ModeToggle />
      </header>

      <main className="flex flex-col p-5">
        <div className="self-end">
          <SelectApi />
        </div>
        <div className="flex flex-wrap justify-evenly gap-x-5">
          {result.map((news) => {
            return <Article key={news.url} {...news} />
          })}
        </div>
      </main>
    </>
  )
}
