import { DashboardApi } from '../../app/dashboard-api'
import { type User, type AuthenticatedUser } from '../../app/schemas/user'

import { type ForAuthenticating } from '../../ports/drivers/for-authenticating'

export class AuthenticatorProxyAdapter implements ForAuthenticating {
  constructor(private readonly dashboardApi: DashboardApi) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    return await this.dashboardApi.login(email, password)
  }

  async register(user: User): Promise<AuthenticatedUser> {
    return await this.dashboardApi.register(user)
  }
}
