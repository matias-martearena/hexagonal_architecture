import { z } from 'zod'
import { permissionsSchema } from './auth'

export const authenticatedUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  token: z.string(),
  refreshToken: z.string(),
  permissions: permissionsSchema,
})

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

export type AuthenticatedUser = z.infer<typeof authenticatedUserSchema>
export type User = z.infer<typeof userSchema>
