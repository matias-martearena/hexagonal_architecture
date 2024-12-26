import { type RepoUser } from '../../../repository/app/schemas'
import { ForRepoQuerying } from '../../ports/drivens'

const userMock: RepoUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@gmail.com',
}

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(email: string): Promise<RepoUser> {
    return Promise.resolve(userMock)
  }

  createUser(user: User, password: string): Promise<RepoUser> {
    return Promise.resolve(userMock)
  }
}
