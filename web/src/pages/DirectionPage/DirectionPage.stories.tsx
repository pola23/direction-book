import type { ComponentMeta } from '@storybook/react'

import DirectionPage from './DirectionPage'

export const generated = () => {
  return <DirectionPage />
}

export default {
  title: 'Pages/DirectionPage',
  component: DirectionPage,
} as ComponentMeta<typeof DirectionPage>
