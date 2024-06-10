import env from '@/env'

import { Api, Article } from './api'

export class GNewsApi implements Api {
  private baseUrl: string

  constructor() {
    this.baseUrl = 'https://gnews.io/api/v4/'
  }

  async getArticles(): Promise<Article[]> {
    const result = await fetch(
      `${this.baseUrl}top-headlines?category=technology&lang=pt&country=pt&apikey=${env.GNEWS_KEY}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = (await result.json()) as { articles: Article[] }

    return data.articles
  }
}
