import type { ComponentMeta } from '@storybook/react'

import AddDirectionPage from './AddDirectionPage'

export const generated = () => {
  return <AddDirectionPage />
}

export default {
  title: 'Pages/AddDirectionPage',
  component: AddDirectionPage,
} as ComponentMeta<typeof AddDirectionPage>
