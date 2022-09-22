import type { Rate } from '@prisma/client'

import { rates, rate, createRate, updateRate, deleteRate } from './rates'
import type { StandardScenario } from './rates.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rates', () => {
  scenario('returns all rates', async (scenario: StandardScenario) => {
    const result = await rates()

    expect(result.length).toEqual(Object.keys(scenario.rate).length)
  })

  scenario('returns a single rate', async (scenario: StandardScenario) => {
    const result = await rate({ id: scenario.rate.one.id })

    expect(result).toEqual(scenario.rate.one)
  })

  scenario('creates a rate', async (scenario: StandardScenario) => {
    const result = await createRate({
      input: { userId: scenario.rate.two.userId },
    })

    expect(result.userId).toEqual(scenario.rate.two.userId)
  })

  scenario('updates a rate', async (scenario: StandardScenario) => {
    const original = (await rate({ id: scenario.rate.one.id })) as Rate
    const result = await updateRate({
      id: original.id,
      input: { userId: scenario.rate.two.userId },
    })

    expect(result.userId).toEqual(scenario.rate.two.userId)
  })

  scenario('deletes a rate', async (scenario: StandardScenario) => {
    const original = (await deleteRate({ id: scenario.rate.one.id })) as Rate
    const result = await rate({ id: original.id })

    expect(result).toEqual(null)
  })
})
