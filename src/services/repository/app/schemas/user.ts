import { z } from 'zod'

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

export const repoUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

export const externalUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
})

export type User = z.infer<typeof userSchema>
export type RepoUser = z.infer<typeof repoUserSchema>
export type ExternalUser = z.infer<typeof externalUserSchema>
