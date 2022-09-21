// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AddDirectionPanel> = (args) => {
//   return <AddDirectionPanel {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AddDirectionPanel from './AddDirectionPanel'

export const generated = () => {
  return <AddDirectionPanel />
}

export default {
  title: 'Components/AddDirectionPanel',
  component: AddDirectionPanel,
} as ComponentMeta<typeof AddDirectionPanel>
