import { type User as RepoUser } from '../../../repository/app/schemas'
import { type User } from '../drivers'

export interface ForRepoQuerying {
  getUser: (email: string) => Promise<RepoUser>
  createUser: (user: User, password: string) => Promise<RepoUser>
}