import Axios from 'axios'
import FormData from 'form-data'
import sha1 from 'sha1'
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
  async ({ publicId }) => {
    if (!publicId) return
    const timestamp = new Date().getTime()
    const string = `public_id=${publicId}&timestamp=${timestamp}${'t9Nrs662f2JfKxiG4RtV4hSNWEo'}`
    const signature = await sha1(string)

    const formData = new FormData()
    formData.append('public_id', publicId)
    formData.append('api_key', '462859866789283')
    formData.append('signature', signature)
    formData.append('timestamp', `${timestamp}`)

    let mess = ''
    Axios.post(
      'https://api.cloudinary.com/v1_1/dzmxvq5f5/image/destroy',
      formData
    )
      .then(() => {
        mess = 'DONE'
      })
      .catch((err) => {
        mess = err
      })
    return mess
  }

export const Information: InformationRelationResolvers = {
  directionPost: (_obj, { root }) => {
    return db.information
      .findUnique({ where: { id: root?.id } })
      .directionPost()
  },
}
