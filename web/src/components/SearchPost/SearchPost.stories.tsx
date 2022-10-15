// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SearchPost> = (args) => {
//   return <SearchPost {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SearchPost from './SearchPost'

export const generated = () => {
  return <SearchPost />
}

export default {
  title: 'Components/SearchPost',
  component: SearchPost,
} as ComponentMeta<typeof SearchPost>
