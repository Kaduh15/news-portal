import env from '@/env'

import { Api, Article, urlImagesPermissions } from './api'

export class NewsApi implements Api {
  private baseUrl: string

  constructor() {
    this.baseUrl = 'https://newsapi.org/v2/'
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
    const data = (await response.json()) as { articles: Article[] }

    const articles = data.articles.map((article) => {
      const image = urlImagesPermissions.some((url) => {
        return article.urlToImage && article.urlToImage.includes(url)
      })
        ? article.image
        : ''

      return {
        ...article,
        image,
      }
    })

    return articles
  }
}
