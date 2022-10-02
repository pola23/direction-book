// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PostRating> = (args) => {
//   return <PostRating {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PostRating from './PostRating'

export const generated = () => {
  return <PostRating />
}

export default {
  title: 'Components/PostRating',
  component: PostRating,
} as ComponentMeta<typeof PostRating>
