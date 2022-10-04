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

export const updateFeedback: MutationResolvers['updateFeedback'] = async ({
  id,
}) => {
  const rates = await db.feedback.findUnique({
    where: { id },
    select: { rates: true },
  })
  const sum = rates.rates
    .map((e) => e.rate)
    .reduce((total, currentValue) => (total = total + currentValue), 0)
  const total = rates.rates.map((e) => e.rate).length
  return db.feedback.update({
    data: {
      rating: sum / total,
    },
    where: { id },
  })
}

export const deleteFeedback: MutationResolvers['deleteFeedback'] = ({ id }) => {
  return db.feedback.delete({
    where: { id },
  })
}

export const Feedback: FeedbackRelationResolvers = {
  rates: (_obj, { root }) => {
    return db.feedback.findUnique({ where: { id: root?.id } }).rates()
  },
  directionPost: (_obj, { root }) => {
    return db.feedback.findUnique({ where: { id: root?.id } }).directionPost()
  },
}
