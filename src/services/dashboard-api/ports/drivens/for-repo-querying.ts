import { type ExternalUser } from '../../../repository/app/schemas/user'
import { type User } from '../../app/schemas/user'

export interface ForRepoQuerying {
  getUser: (email: string) => Promise<ExternalUser>
  createUser: (user: User) => Promise<ExternalUser>
}
