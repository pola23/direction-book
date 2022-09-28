export const schema = gql`
  type DirectionPost {
    id: Int!
    userId: Int!
    user: User!
    createdAt: DateTime!
    informations: [Information]!
    feedbackId: Int!
    feedback: Feedback!
    totalFare: Float!
    locationA: String!
    locationB: String!
    description: String
  }

  type Query {
    directionPosts: [DirectionPost!]! @requireAuth
    directionPost(id: Int!): DirectionPost @requireAuth
    directionPostsProfile(id: Int!): [DirectionPost!]! @requireAuth
  }

  input CreateDirectionPostInput {
    userId: Int!
    totalFare: Float!
    locationA: String!
    locationB: String!
    description: String
  }

  input UpdateDirectionPostInput {
    userId: Int
    feedbackId: Int
  }

  type Mutation {
    createDirectionPost(input: CreateDirectionPostInput!): DirectionPost!
      @requireAuth
    updateDirectionPost(
      id: Int!
      input: UpdateDirectionPostInput!
    ): DirectionPost! @requireAuth
    deleteDirectionPost(id: Int!): DirectionPost! @requireAuth
  }
`
