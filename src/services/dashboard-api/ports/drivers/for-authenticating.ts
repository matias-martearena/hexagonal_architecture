export interface AuthenticatedUser {
  email: string
  name: string
  id: string
  token: string
  refreshToken: string
}

export type User = Pick<AuthenticatedUser, 'email' | 'name'>

export interface ForAuthenticating {
  login: (email: string, password: string) => Promise<AuthenticatedUser>
  register: (user: User, password: string) => Promise<AuthenticatedUser>
}
