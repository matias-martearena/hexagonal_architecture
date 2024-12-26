import { z } from 'zod'

export const authDetailsSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
})

export const permissionsSchema = z.object({
  admin: z.boolean(),
  user: z.boolean(),
})

export type AuthDetails = z.infer<typeof authDetailsSchema>
export type Permissions = z.infer<typeof permissionsSchema>
