import { type ExternalUser } from '../../../repository/app/schemas'
import { ForRepoQuerying } from '../../ports/drivens'

const userMock: ExternalUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@gmail.com',
}

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(email: string): Promise<ExternalUser> {
    return Promise.resolve(userMock)
  }

  createUser(user: User): Promise<ExternalUser> {
    return Promise.resolve(userMock)
  }
}
