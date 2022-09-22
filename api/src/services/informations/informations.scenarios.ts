import type { Prisma, Information } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InformationCreateArgs>({
  information: {
    one: {
      data: {
        directionPost: {
          create: {
            user: {
              create: {
                email: 'String1680840',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            feedback: { create: {} },
          },
        },
      },
    },
    two: {
      data: {
        directionPost: {
          create: {
            user: {
              create: {
                email: 'String9598670',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            feedback: { create: {} },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Information, 'information'>
