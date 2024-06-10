'use server'

import { type Api } from './api'
import { GNewsApi } from './gnewsApi'
import { NewsApi } from './newsApi'

export type Apis = 'gnews' | 'news'

export async function createApi(api: Apis): Promise<Api> {
  switch (api) {
    case 'gnews':
      return new GNewsApi()
    case 'news':
      return new NewsApi()
    default:
      throw new Error('Invalid API')
  }
}
