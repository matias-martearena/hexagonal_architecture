import { type ForMonitoring } from '../ports/drivens'
import { type ForManagingUser } from '../ports/drivers'
import { type ExternalUser, type RepoUser, type User } from './schemas'

export class Repository implements ForManagingUser {
  private readonly userList: RepoUser[] = []

  constructor(private readonly logger: ForMonitoring) {}

  async getUser(email: string): Promise<ExternalUser> {
    const user: RepoUser | undefined = this.userList.find(
      user => user.email === email,
    )

    if (!user) {
      this.logger.log('GetUser', 'User not found')
      throw new Error('User not found')
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }

  async createUser(user: User): Promise<ExternalUser> {
    const userExists = this.userList.find(u => u.email === user.email)

    if (userExists) {
      this.logger.log('CreateUser', 'User already exists')
      throw new Error('User already exists')
    }

    const newUser = {
      ...user,
      id: String(this.userList.length + 1),
    }

    this.userList.push(newUser)

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    }
  }
}
