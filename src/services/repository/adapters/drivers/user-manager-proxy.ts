import { Repository } from '../../app/repository'
import { type ExternalUser, type User } from '../../app/schemas/user'

import { type ForManagingUser } from '../../ports/drivers/for-managing-user'

export class UserManagerProxy implements ForManagingUser {
  constructor(private readonly repository: Repository) {}

  async getUser(email: string): Promise<ExternalUser> {
    return this.repository.getUser(email)
  }

  async createUser(user: User): Promise<ExternalUser> {
    return this.repository.createUser(user)
  }
}
