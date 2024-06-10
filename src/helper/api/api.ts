export type Source = {
  name: string
  url: string
}

export type Article = {
  title: string
  description: string
  content: string
  url: string
  image: string
  urlToImage: string
  publishedAt: string
  source: Source
}

export interface Api {
  getArticles(): Promise<Article[]>
}
