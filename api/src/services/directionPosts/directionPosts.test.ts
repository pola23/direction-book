import type { DirectionPost } from '@prisma/client'

import {
  directionPosts,
  directionPost,
  createDirectionPost,
  updateDirectionPost,
  deleteDirectionPost,
} from './directionPosts'
import type { StandardScenario } from './directionPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('directionPosts', () => {
  scenario('returns all directionPosts', async (scenario: StandardScenario) => {
    const result = await directionPosts()

    expect(result.length).toEqual(Object.keys(scenario.directionPost).length)
  })

  scenario(
    'returns a single directionPost',
    async (scenario: StandardScenario) => {
      const result = await directionPost({ id: scenario.directionPost.one.id })

      expect(result).toEqual(scenario.directionPost.one)
    }
  )

  scenario('creates a directionPost', async (scenario: StandardScenario) => {
    const result = await createDirectionPost({
      input: {
        userId: scenario.directionPost.two.userId,
        feedbackId: scenario.directionPost.two.feedbackId,
      },
    })

    expect(result.userId).toEqual(scenario.directionPost.two.userId)
    expect(result.feedbackId).toEqual(scenario.directionPost.two.feedbackId)
  })

  scenario('updates a directionPost', async (scenario: StandardScenario) => {
    const original = (await directionPost({
      id: scenario.directionPost.one.id,
    })) as DirectionPost
    const result = await updateDirectionPost({
      id: original.id,
      input: { userId: scenario.directionPost.two.userId },
    })

    expect(result.userId).toEqual(scenario.directionPost.two.userId)
  })

  scenario('deletes a directionPost', async (scenario: StandardScenario) => {
    const original = (await deleteDirectionPost({
      id: scenario.directionPost.one.id,
    })) as DirectionPost
    const result = await directionPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
