import { type AuthDetails, type Permissions } from './../../app/schemas'

import { type ForControlAuthenticating } from '../../ports/drivens'

const authDetailsMock: AuthDetails = {
  token: 'token',
  refreshToken: 'refreshToken',
}

const permissionsMock: Permissions = {
  admin: true,
  user: true,
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
  getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return Promise.resolve(authDetailsMock)
  }

  getPermissions(email: string, password: string): Promise<Permissions> {
    return Promise.resolve(permissionsMock)
  }
}
