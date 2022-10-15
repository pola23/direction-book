// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PostList> = (args) => {
//   return <PostList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PostList from './PostList'

export const generated = () => {
  return <PostList />
}

export default {
  title: 'Components/PostList',
  component: PostList,
} as ComponentMeta<typeof PostList>
