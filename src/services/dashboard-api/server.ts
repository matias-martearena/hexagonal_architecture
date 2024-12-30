import express from 'express'
import cors from 'cors'

import * as trpcExpress from '@trpc/server/adapters/express'
import { localTRPCCompose } from './app/composition-root'

const createContext = () => ({})
const app = express()
const PORT: number = 4000

app.use(cors())
app.use(
  `http://localhost:${PORT}/trpc`,
  trpcExpress.createExpressMiddleware({
    router: localTRPCCompose().appRouter,
    createContext,
  }),
)

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost${PORT}/trpc`)
})

// LUNCH: tsx server.ts
