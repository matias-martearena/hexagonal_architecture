import { AuthenticatorProxyAdapter } from '../adapters/drivers/authenticator-proxy-adapter'
import { ControlAuthenticatorStub } from '../adapters/drivens/control-authenticator-stub-adapter'
import { RepoQuerierStub } from '../adapters/drivens/repo-querier-stub-adapter'

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
