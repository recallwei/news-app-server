import type { User } from '@prisma/client'

import type { Lang, MessageSchema } from '@/types'

declare global {
  namespace Express {
    interface Request {
      currentUser: User
      lang: Lang
      t(key: MessageSchema, lang?: Lang): string
    }
  }
}
