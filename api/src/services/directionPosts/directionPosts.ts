import type {
  QueryResolvers,
  MutationResolvers,
  DirectionPostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { createFeedback } from '../feedbacks/feedbacks'
import { deleteInformation } from '../informations/informations'

export const directionPosts: QueryResolvers['directionPosts'] = () => {
  return db.directionPost.findMany()
}

export const directionPostsProfile: QueryResolvers['directionPostsProfile'] = ({
  id,
}) => {
  return db.directionPost.findMany({
    where: {
      userId: id,
    },
  })
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
        locationA: input.locationA,
        locationB: input.locationB,
        description: input.description,
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

export const deleteDirectionPost: MutationResolvers['deleteDirectionPost'] =
  async ({ id }) => {
    await db.information.deleteMany({ where: { directionPostId: id } })
    return db.directionPost.delete({ where: { id } })
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
