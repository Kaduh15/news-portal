import env from '@/env'

import { Api, Article } from './api'

export class NewsApi implements Api {
  private baseUrl: string

  constructor() {
    this.baseUrl = 'https://newsapi.org/v2/'
  }

  async fetchImage(urlToImage: string): Promise<string | undefined> {
    if (!urlToImage) return undefined

    const urlImagem = `https://api.microlink.io?url=${urlToImage}`
    const response = await fetch(urlImagem, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    return data.data.image.url
  }

  async getArticles(): Promise<Article[]> {
    const response = await fetch(
      `${this.baseUrl}top-headlines?category=technology&country=br&apiKey=${env.NEWS_KEY}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = await response.json()

    const articlesWithImages = await Promise.all(
      data.articles.map(async (article: Article) => {
        const image = await this.fetchImage(article.urlToImage)
        return { ...article, image }
      }),
    )

    return articlesWithImages
  }
}
