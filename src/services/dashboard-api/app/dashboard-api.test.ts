import { describe, expect, it } from 'vitest'

import { ControlAuthenticatorStub, RepoQuerierStub } from '../adapters/drivens'
import { DashboardApi } from './dashboard-api'

import { type User, type AuthenticatedUser } from './schemas'

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
    const result = await dashboardApiMock.register(mockedUser, '123456')

    // THEN: Check the result
    expect(result).toEqual(expectedResult)
  })
})
