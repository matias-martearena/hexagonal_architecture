import { type ExternalUser } from '../../../repository/app/schemas/user'
import { type ForRepoQuerying } from '../../ports/drivens/for-repo-querying'
import { type User } from '../../app/schemas/user'

const userMock: ExternalUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@gmail.com',
}

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(_email: string): Promise<ExternalUser> {
    return Promise.resolve(userMock)
  }

  createUser(_user: User): Promise<ExternalUser> {
    return Promise.resolve(userMock)
  }
}
