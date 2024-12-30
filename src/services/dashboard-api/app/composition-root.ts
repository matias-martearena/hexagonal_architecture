import { initTRPC } from '@trpc/server'

import { ControlAuthenticatorStub } from '../adapters/drivens/control-authenticator-stub-adapter'
import { RepoQuerierStub } from '../adapters/drivens/repo-querier-stub-adapter'

import { DashboardApi } from './dashboard-api'

import { AuthenticatorProxyAdapter } from '../adapters/drivers/authenticator-proxy-adapter'
import { authTRPCAdapter } from './../adapters/drivers/auth-trpc-adapter'

const compositionMock = () => {
  // DRIVENS
  const controlAuthenticatorStub = new ControlAuthenticatorStub()
  const repoQuerierStub = new RepoQuerierStub()

  // APP
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub,
  )

  // DRIVERS
  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock,
  )

  return {
    authenticatorProxyAdapter,
  }
}

export const { authenticatorProxyAdapter } = compositionMock()

export const localTRPCCompose = () => {
  // DRIVENS
  const controlAuthenticatorStub = new ControlAuthenticatorStub()
  const repoQuerierStub = new RepoQuerierStub()

  // APP
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub,
  )

  // TRPC INSTANCE
  const t = initTRPC.create()

  // TRPC DRIVER
  const authTRPCAdapterRouter = authTRPCAdapter(dashboardApiMock, t)

  const appRouter = t.router({
    auth: authTRPCAdapterRouter,
  })

  return { appRouter }
}
