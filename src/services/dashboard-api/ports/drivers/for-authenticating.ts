import { type AuthenticatedUser, type User } from '../../app/schemas'

export interface ForAuthenticating {
  login: (email: string, password: string) => Promise<AuthenticatedUser>
  register: (user: User, password: string) => Promise<AuthenticatedUser>
}
