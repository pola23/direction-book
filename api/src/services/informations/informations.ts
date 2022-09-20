import type {
  QueryResolvers,
  MutationResolvers,
  InformationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const informations: QueryResolvers['informations'] = () => {
  return db.information.findMany()
}

export const information: QueryResolvers['information'] = ({ id }) => {
  return db.information.findUnique({
    where: { id },
  })
}

export const createInformation: MutationResolvers['createInformation'] = ({
  input,
}) => {
  return db.information.create({
    data: input,
  })
}

export const updateInformation: MutationResolvers['updateInformation'] = ({
  id,
  input,
}) => {
  return db.information.update({
    data: input,
    where: { id },
  })
}

export const deleteInformation: MutationResolvers['deleteInformation'] = ({
  id,
}) => {
  return db.information.delete({
    where: { id },
  })
}

export const Information: InformationRelationResolvers = {
  directionPost: (_obj, { root }) => {
    return db.information
      .findUnique({ where: { id: root?.id } })
      .directionPost()
  },
}
