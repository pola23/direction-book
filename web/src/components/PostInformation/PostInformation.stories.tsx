// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PostInformation> = (args) => {
//   return <PostInformation {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PostInformation from './PostInformation'

export const generated = () => {
  return <PostInformation />
}

export default {
  title: 'Components/PostInformation',
  component: PostInformation,
} as ComponentMeta<typeof PostInformation>
