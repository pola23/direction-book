// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Post> = (args) => {
//   return <Post {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Post from './Post'

export const generated = () => {
  return <Post />
}

export default {
  title: 'Components/Post',
  component: Post,
} as ComponentMeta<typeof Post>
