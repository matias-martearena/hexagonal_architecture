import { type AuthDetails, type Permissions } from '../../app/schemas/auth'

export interface ForControlAuthenticating {
  getAuthDetails: (email: string, password: string) => Promise<AuthDetails>
  getPermissions: (email: string, password: string) => Promise<Permissions>
}
