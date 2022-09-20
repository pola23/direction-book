export const schema = gql`
  type Feedback {
    id: Int!
    rating: Float!
    userId: Int!
    user: User!
    DirectionPost: [DirectionPost]!
  }

  type Query {
    feedbacks: [Feedback!]! @requireAuth
    feedback(id: Int!): Feedback @requireAuth
  }

  input CreateFeedbackInput {
    rating: Float!
    userId: Int!
  }

  input UpdateFeedbackInput {
    rating: Float
    userId: Int
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback! @requireAuth
    updateFeedback(id: Int!, input: UpdateFeedbackInput!): Feedback!
      @requireAuth
    deleteFeedback(id: Int!): Feedback! @requireAuth
  }
`
