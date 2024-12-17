import { AuthenticatorProxyAdapter } from '../adapters/drivers'
import { ControlAuthenticatorStub, RepoQuerierStub } from '../adapters/drivens'

import { DashboardApi } from './dashboard-api'

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub()
  const repoQuerierStub = new RepoQuerierStub()
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub,
  )

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock,
  )

  return {
    authenticatorProxyAdapter,
  }
}

export const { authenticatorProxyAdapter } = compositionMock()
