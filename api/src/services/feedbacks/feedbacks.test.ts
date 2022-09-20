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

  scenario('creates a feedback', async (scenario: StandardScenario) => {
    const result = await createFeedback({
      input: { rating: 8373434.16317065, userId: scenario.feedback.two.userId },
    })

    expect(result.rating).toEqual(8373434.16317065)
    expect(result.userId).toEqual(scenario.feedback.two.userId)
  })

  scenario('updates a feedback', async (scenario: StandardScenario) => {
    const original = (await feedback({
      id: scenario.feedback.one.id,
    })) as Feedback
    const result = await updateFeedback({
      id: original.id,
      input: { rating: 3597622.9503740375 },
    })

    expect(result.rating).toEqual(3597622.9503740375)
  })

  scenario('deletes a feedback', async (scenario: StandardScenario) => {
    const original = (await deleteFeedback({
      id: scenario.feedback.one.id,
    })) as Feedback
    const result = await feedback({ id: original.id })

    expect(result).toEqual(null)
  })
})
