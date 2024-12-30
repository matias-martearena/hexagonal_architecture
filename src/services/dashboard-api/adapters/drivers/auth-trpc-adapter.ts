import { initTRPC } from '@trpc/server'
import { DashboardApi } from '../../app/dashboard-api'
import { userSchema, authenticatedUserSchema } from '../../app/schemas/user'

export const authTRPCAdapter = (
  dashboardApi: DashboardApi,
  t: ReturnType<typeof initTRPC.create>,
) => {
  return t.router({
    login: t.procedure
      .input(userSchema.pick({ email: true, password: true }))
      .output(authenticatedUserSchema)
      .mutation(({ input }) => dashboardApi.login(input.email, input.password)), // NOTE: mutation is like a POST method
    register: t.procedure
      .input(userSchema)
      .output(authenticatedUserSchema)
      .mutation(({ input }) => dashboardApi.register(input)),
  })
}
