import { describe, expect, it } from 'vitest'

import { Repository } from './repository'
import { LoggerStubAdapter } from '../adapters/drivens'

import { type RepoUser, type User } from './schemas'

describe('Repository', () => {
  const monitoryStub = new LoggerStubAdapter()
  const repositoryMock = new Repository(monitoryStub)

  it.concurrent(
    'should control that the user does not exist get user',
    async () => {
      // GIVEN
      const mockedEmail: string = 'samuelcito@gmail.com'

      const expectedResult = {
        id: '1',
        name: 'Samuel',
        email: mockedEmail,
      }

      let result

      // WHEN
      try {
        result = await repositoryMock.getUser(mockedEmail)
      } catch (error) {
        console.error(error)
      }

      // THEN
      expect(result).not.toEqual(expectedResult)
    },
  )

  it.concurrent('should create a new user', async () => {
    // GIVEN
    const mockedEmail: string = 'samuelcito@gmail.com'

    const mockedUser: User = {
      name: 'Samuel',
      email: mockedEmail,
      password: 'password',
    }

    const expectedResult: RepoUser = {
      id: '1',
      ...mockedUser,
    }

    // WHEN
    const result = await repositoryMock.createUser(mockedUser)

    // THEN
    expect(result).toEqual(expectedResult)
  })

  it.concurrent(
    'should control that the user already exist get user',
    async () => {
      // GIVEN
      const mockedEmail: string = 'samuelcito@gmail.com'

      const expectedResult = {
        id: '1',
        name: 'Samuel',
        email: mockedEmail,
      }

      let result

      // WHEN
      try {
        result = await repositoryMock.getUser(mockedEmail)
      } catch (error) {
        console.error(error)
      }

      // THEN
      expect(result).not.toEqual(expectedResult)
    },
  )

  it.concurrent('should get an user', async () => {
    // GIVEN
    const mockedEmail: string = 'samuelcito@gmail.com'

    const expectedResult = {
      id: '1',
      name: 'Samuel',
      email: mockedEmail,
      password: 'password',
    }

    // WHEN
    const result = await repositoryMock.getUser(mockedEmail)

    // THEN
    expect(result).toEqual(expectedResult)
  })
})
