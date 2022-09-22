import type { Feedback } from '@prisma/client'

import {
  feedbacks,
  feedback,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} from './feedbacks'
import type { StandardScenario } from './feedbacks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('feedbacks', () => {
  scenario('returns all feedbacks', async (scenario: StandardScenario) => {
    const result = await feedbacks()

    expect(result.length).toEqual(Object.keys(scenario.feedback).length)
  })

  scenario('returns a single feedback', async (scenario: StandardScenario) => {
    const result = await feedback({ id: scenario.feedback.one.id })

    expect(result).toEqual(scenario.feedback.one)
  })

  scenario('deletes a feedback', async (scenario: StandardScenario) => {
    const original = (await deleteFeedback({
      id: scenario.feedback.one.id,
    })) as Feedback
    const result = await feedback({ id: original.id })

    expect(result).toEqual(null)
  })
})
