import type { Prisma, Feedback } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FeedbackCreateArgs>({
  feedback: {
    one: {
      data: {
        rating: 7409274.627888631,
        user: {
          create: {
            email: 'String9291735',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        rating: 8798443.974925073,
        user: {
          create: {
            email: 'String174413',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Feedback, 'feedback'>
