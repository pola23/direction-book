import type { Prisma, Rate } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RateCreateArgs>({
  rate: {
    one: {
      data: {
        user: {
          create: {
            email: 'String530659',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            email: 'String741390',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Rate, 'rate'>
