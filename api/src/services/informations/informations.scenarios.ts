import type { Prisma, Information } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InformationCreateArgs>({
  information: {
    one: {
      data: {
        directionPost: {
          create: {
            Feedback: {
              create: {
                rating: 5710036.671136682,
                user: {
                  create: {
                    email: 'String8306678',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            user: {
              create: {
                email: 'String9521851',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        directionPost: {
          create: {
            Feedback: {
              create: {
                rating: 9210286.585471364,
                user: {
                  create: {
                    email: 'String8106104',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
            user: {
              create: {
                email: 'String8444900',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Information, 'information'>
