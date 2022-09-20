import type {
  QueryResolvers,
  MutationResolvers,
  FeedbackRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const feedbacks: QueryResolvers['feedbacks'] = () => {
  return db.feedback.findMany()
}

export const feedback: QueryResolvers['feedback'] = ({ id }) => {
  return db.feedback.findUnique({
    where: { id },
  })
}

export const createFeedback: MutationResolvers['createFeedback'] = ({
  input,
}) => {
  return db.feedback.create({
    data: input,
  })
}

export const updateFeedback: MutationResolvers['updateFeedback'] = ({
  id,
  input,
}) => {
  return db.feedback.update({
    data: input,
    where: { id },
  })
}

export const deleteFeedback: MutationResolvers['deleteFeedback'] = ({ id }) => {
  return db.feedback.delete({
    where: { id },
  })
}

export const Feedback: FeedbackRelationResolvers = {
  user: (_obj, { root }) => {
    return db.feedback.findUnique({ where: { id: root?.id } }).user()
  },
  DirectionPost: (_obj, { root }) => {
    return db.feedback.findUnique({ where: { id: root?.id } }).DirectionPost()
  },
}
