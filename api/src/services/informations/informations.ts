import * as Filestack from 'filestack-js'
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

export const deleteInfromationImage: MutationResolvers['deleteInfromationImage'] =
  async ({ url }) => {
    const client = Filestack.init(process.env.REDWOOD_ENV_FILESTACK_API_KEY)

    const handle = url.split('/').pop()
    console.log('HANDLE', handle)

    const security = Filestack.getSecurity(
      {
        // We set `expiry` at `now() + 5 minutes`.
        expiry: new Date().getTime() + 5 * 60 * 1000,
        handle,
        call: ['remove'],
      },
      process.env.REDWOOD_ENV_FILESTACK_SECRET
    )

    await client.remove(handle, security)
    return 'DONE'
  }

export const Information: InformationRelationResolvers = {
  directionPost: (_obj, { root }) => {
    return db.information
      .findUnique({ where: { id: root?.id } })
      .directionPost()
  },
}
