export const schema = gql`
  type Rate {
    id: Int!
    feedbackId: Int
    rate: Float!
    userId: Int!
    user: User!
    feedback: Feedback
  }

  type Query {
    rates: [Rate!]! @requireAuth
    rate(id: Int!): Rate @requireAuth
  }

  input CreateRateInput {
    feedbackId: Int
    rate: Float!
    userId: Int!
  }

  input UpdateRateInput {
    feedbackId: Int
    rate: Float
    userId: Int
  }

  type Mutation {
    createRate(input: CreateRateInput!): Rate! @requireAuth
    updateRate(id: Int!, input: UpdateRateInput!): Rate! @requireAuth
    deleteRate(id: Int!): Rate! @requireAuth
  }
`
