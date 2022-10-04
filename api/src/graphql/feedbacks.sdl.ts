export const schema = gql`
  type Feedback {
    id: Int!
    rating: Float!
    rates: [Rate]!
    directionPost: DirectionPost
  }

  type Query {
    feedbacks: [Feedback!]! @requireAuth
    feedback(id: Int!): Feedback @skipAuth
  }

  input CreateFeedbackInput {
    rating: Float!
  }

  type Mutation {
    createFeedback(input: CreateFeedbackInput!): Feedback! @requireAuth
    updateFeedback(id: Int!): Feedback! @requireAuth
    deleteFeedback(id: Int!): Feedback! @requireAuth
  }
`
