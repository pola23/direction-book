import type { Information } from '@prisma/client'

import {
  informations,
  information,
  createInformation,
  updateInformation,
  deleteInformation,
} from './informations'
import type { StandardScenario } from './informations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('informations', () => {
  scenario('returns all informations', async (scenario: StandardScenario) => {
    const result = await informations()

    expect(result.length).toEqual(Object.keys(scenario.information).length)
  })

  scenario(
    'returns a single information',
    async (scenario: StandardScenario) => {
      const result = await information({ id: scenario.information.one.id })

      expect(result).toEqual(scenario.information.one)
    }
  )

  scenario('creates a information', async (scenario: StandardScenario) => {
    const result = await createInformation({
      input: { directionPostId: scenario.information.two.directionPostId },
    })

    expect(result.directionPostId).toEqual(
      scenario.information.two.directionPostId
    )
  })

  scenario('updates a information', async (scenario: StandardScenario) => {
    const original = (await information({
      id: scenario.information.one.id,
    })) as Information
    const result = await updateInformation({
      id: original.id,
      input: { directionPostId: scenario.information.two.directionPostId },
    })

    expect(result.directionPostId).toEqual(
      scenario.information.two.directionPostId
    )
  })

  scenario('deletes a information', async (scenario: StandardScenario) => {
    const original = (await deleteInformation({
      id: scenario.information.one.id,
    })) as Information
    const result = await information({ id: original.id })

    expect(result).toEqual(null)
  })
})
