import { describe, expect, it } from 'vitest'

import { ControlAuthenticatorStub } from '../adapters/drivens/control-authenticator-stub-adapter'
import { RepoQuerierStub } from '../adapters/drivens/repo-querier-stub-adapter'
import { DashboardApi } from './dashboard-api'

import { type User, type AuthenticatedUser } from './schemas/user'

// concurrent: For execute test on parallel way

describe('DashboardApi', () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub()
  const repoQuerierStub = new RepoQuerierStub()

  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub,
  )

  it.concurrent('should login', async () => {
    // GIVEN: mock data result
    const mockedParams: { email: string; password: string } = {
      email: 'john@gmail.com',
      password: '123456',
    }

    const expectedResult: AuthenticatedUser = {
      id: '1',
      name: 'John Doe',
      email: 'john@gmail.com',
      token: 'token',
      refreshToken: 'refreshToken',
      permissions: {
        admin: true,
        user: true,
      },
    }

    // WHEN: Implement the method
    const result = await dashboardApiMock.login(
      mockedParams.email,
      mockedParams.password,
    )

    // THEN: Check the result
    expect(result).toEqual(expectedResult)
  })

  it.concurrent('should register', async () => {
    // GIVEN: mock data result
    const mockedUser: User = {
      email: 'john@gmail.com',
      name: 'John Doe',
      password: 'password',
    }

    const expectedResult: AuthenticatedUser = {
      id: '1',
      name: 'John Doe',
      email: 'john@gmail.com',
      token: 'token',
      refreshToken: 'refreshToken',
      permissions: {
        admin: true,
        user: true,
      },
    }

    // WHEN: Implement the method
    const result = await dashboardApiMock.register(mockedUser)

    // THEN: Check the result
    expect(result).toEqual(expectedResult)
  })
})
