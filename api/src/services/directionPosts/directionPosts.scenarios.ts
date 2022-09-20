import type { Prisma, DirectionPost } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DirectionPostCreateArgs>({
  directionPost: {
    one: {
      data: {
        Feedback: {
          create: {
            rating: 6150673.727317557,
            user: {
              create: {
                email: 'String8032393',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String5889994',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        Feedback: {
          create: {
            rating: 1032246.3220467016,
            user: {
              create: {
                email: 'String4417859',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String2814492',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<DirectionPost, 'directionPost'>
