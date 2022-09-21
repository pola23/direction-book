export const schema = gql`
  type DirectionPost {
    id: Int!
    userId: Int!
    feedbackId: Int!
    createdAt: DateTime!
    Feedback: Feedback!
    user: User!
    informations: [Information]!
  }

  type Query {
    directionPosts: [DirectionPost!]! @requireAuth
    directionPost(id: Int!): DirectionPost @requireAuth
  }

  input CreateDirectionPostInput {
    userId: Int!
  }

  input UpdateDirectionPostInput {
    userId: Int
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
