import { z } from 'zod'

const env = z
  .object({
    GNEWS_KEY: z.string(),
    NEWS_KEY: z.string(),
  })
  .parse(process.env)

export default env
