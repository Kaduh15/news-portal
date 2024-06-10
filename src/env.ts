import { z } from 'zod'

const env = z
  .object({
    NEWS_API_KEY: z.string(),
  })
  .parse(process.env)

export default env
