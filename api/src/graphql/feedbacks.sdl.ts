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
    userId: Int!
  }

  input UpdateFeedbackInput {
    rating: Float
    userId: Int
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback! @skipAuth
    updateFeedback(id: Int!, input: UpdateFeedbackInput!): Feedback!
      @requireAuth
    deleteFeedback(id: Int!): Feedback! @requireAuth
  }
`
