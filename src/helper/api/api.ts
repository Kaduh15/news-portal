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

export const urlImagesPermissions = [
  'i0.statig.com.br',
  'tecnologia.ig.com.br',
  'pplware.sapo.pt',
  'www.noticiasaominuto.com',
  'www.eurogamer.pt',
  'media-manager.noticiasaominuto.com',
  'assetsio.gnwcdn.com',
  'www.leak.pt',
  'www.razaoautomovel.com',
  'postal.pt',
]
