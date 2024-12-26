import { type ForAuthenticating } from '../ports/drivers/for-authenticating'
import { type ForControlAuthenticating } from '../ports/drivens/for-control-authenticating'
import { type ForRepoQuerying } from '../ports/drivens/for-repo-querying'

import { type User, type AuthenticatedUser } from './schemas/user'

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
      permissions,
    }

    return result
  }

  async register(user: User): Promise<AuthenticatedUser> {
    const newUser = await this.repoQuerier.createUser(user)

    const authDetails = await this.controlAuthenticator.getAuthDetails(
      user.email,
      user.password,
    )

    const permissions = await this.controlAuthenticator.getPermissions(
      user.email,
      user.password,
    )

    const result = {
      ...newUser,
      ...authDetails,
      permissions,
    }

    return result
  }
}
