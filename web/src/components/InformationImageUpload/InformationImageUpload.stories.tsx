// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InformationImageUpload> = (args) => {
//   return <InformationImageUpload {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InformationImageUpload from './InformationImageUpload'

export const generated = () => {
  return <InformationImageUpload />
}

export default {
  title: 'Components/InformationImageUpload',
  component: InformationImageUpload,
} as ComponentMeta<typeof InformationImageUpload>
