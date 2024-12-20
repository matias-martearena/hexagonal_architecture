import { type Permissions } from './auth'

export interface AuthenticatedUser {
  email: string
  name: string
  id: string
  token: string
  refreshToken: string
  permissions: Permissions
}

export type User = Pick<AuthenticatedUser, 'email' | 'name'>
