import type {
  QueryResolvers,
  MutationResolvers,
  DirectionPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { createFeedback } from '../feedbacks/feedbacks'

export const directionPosts: QueryResolvers['directionPosts'] = () => {
  return db.directionPost.findMany()
}

export const directionPost: QueryResolvers['directionPost'] = ({ id }) => {
  return db.directionPost.findUnique({
    where: { id },
  })
}

export const createDirectionPost: MutationResolvers['createDirectionPost'] =
  async ({ input }) => {
    const f = await createFeedback({ input: { rating: 0 } })
    return db.directionPost.create({
      data: {
        userId: input.userId,
        totalFare: input.totalFare,
        feedbackId: f.id,
      },
    })
  }

export const updateDirectionPost: MutationResolvers['updateDirectionPost'] = ({
  id,
  input,
}) => {
  return db.directionPost.update({
    data: input,
    where: { id },
  })
}

export const deleteDirectionPost: MutationResolvers['deleteDirectionPost'] = ({
  id,
}) => {
  return db.directionPost.delete({
    where: { id },
  })
}

export const DirectionPost: DirectionPostRelationResolvers = {
  user: (_obj, { root }) => {
    return db.directionPost.findUnique({ where: { id: root?.id } }).user()
  },
  informations: (_obj, { root }) => {
    return db.directionPost
      .findUnique({ where: { id: root?.id } })
      .informations()
  },
  feedback: (_obj, { root }) => {
    return db.directionPost.findUnique({ where: { id: root?.id } }).feedback()
  },
}
