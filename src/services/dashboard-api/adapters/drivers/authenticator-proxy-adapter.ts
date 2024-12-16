import { DashboardApi } from '../../app/dashboard-api'

import {
  type AuthenticatedUser,
  type ForAuthenticating,
  type User,
} from '../../ports/drivers'

export class AuthenticatorProxyAdapter implements ForAuthenticating {
  constructor(private readonly dashboardApi: DashboardApi) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    return await this.dashboardApi.login(email, password)
  }

  async register(user: User, password: string): Promise<AuthenticatedUser> {
    return await this.dashboardApi.register(user, password)
  }
}
