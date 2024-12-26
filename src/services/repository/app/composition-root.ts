import { LoggerStubAdapter } from '../adapters/drivens/logger-stub-adapter'
import { UserManagerProxy } from '../adapters/drivers/user-manager-proxy'
import { Repository } from './repository'

export const compositionMock = () => {
  const monitorStub = new LoggerStubAdapter()
  const repositoryMock = new Repository(monitorStub)

  const userManagerProxy = new UserManagerProxy(repositoryMock)

  return { userManagerProxy }
}
