import { ForControlAuthenticating, ForRepoQuerying } from '../ports/drivens'
import {
  AuthenticatedUser,
  ForAuthenticating,
  type User,
} from '../ports/drivers'

export class DashboardApi implements ForAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuerying,
  ) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      email,
      password,
    )

    const permissions = await this.controlAuthenticator.getPermissions(
      email,
      password,
    )

    const user = await this.repoQuerier.getUser(email)

    const result = {
      ...user,
      ...authDetails,
      ...permissions,
    }

    return result
  }

  async register(user: User, password: string): Promise<AuthenticatedUser> {
    const newUser = await this.repoQuerier.createUser(user, password)

    const authDetails = await this.controlAuthenticator.getAuthDetails(
      user.email,
      password,
    )

    const permissions = await this.controlAuthenticator.getPermissions(
      user.email,
      password,
    )

    const result = {
      ...newUser,
      ...authDetails,
      ...permissions,
    }

    return result
  }
}
