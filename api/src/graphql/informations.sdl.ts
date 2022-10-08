export const schema = gql`
  type Information {
    id: Int!
    directionPostId: Int!
    title: String
    description: String
    imageUrl: String
    mode: String
    location: String
    directionPost: DirectionPost!
    fare: Float!
  }

  type Query {
    informations: [Information!]! @requireAuth
    information(id: Int!): Information @requireAuth
  }

  input CreateInformationInput {
    directionPostId: Int!
    title: String
    description: String
    imageUrl: String
    location: String
    fare: Float
    mode: String
  }

  input UpdateInformationInput {
    directionPostId: Int
    title: String
    description: String
    imageUrl: String
    location: String
  }

  type Mutation {
    createInformation(input: CreateInformationInput!): Information! @requireAuth
    updateInformation(id: Int!, input: UpdateInformationInput!): Information!
      @requireAuth
    deleteInformation(id: Int!): Information! @skipAuth
    deleteInfromationImage(url: String!): String! @requireAuth
  }
`
