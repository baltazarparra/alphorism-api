const { gql } = require('apollo-server')

module.exports = gql`
    type Quote {
        id: ID!
        quote: String!
        author: String!
    }
    input CreateQuoteInput {
        quote: String!
        author: String!
    }
    input UpdateQuoteInput {
        quote: String!
        author: String!
    }
    input DeleteQuoteInput {
        id: ID!
    }
    type DeletePayload {
        id: ID!
    }
    type Query {
        quotes: [Quote]
    }
    type Mutation {
        createQuote(input: CreateQuoteInput!): Quote!
        updateQuote(id: ID!, input: UpdateQuoteInput!): Quote!
        deleteQuote(id: ID!): DeletePayload!
    }
`