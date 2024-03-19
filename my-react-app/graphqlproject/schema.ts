// DEFINING OUR OWN TYPES
// Exclamation ! means can't be null.

// FIVE BUILT IN SCALAR TYPES FOR GRAPHQL
// int, float, string, boolean, ID

// Query > defines the entry points to the graph for the user

export const typeDefs = `#graphql
  type Company {
    id: ID!
    title: String!
    disclosure: [String!]!
    score: [Score!]
  }
  type Score {
    id: ID!
    rating: Int!
    content: String!
    agency: Agency!
    company: Company!
  }
  type Agency {
    id: ID!
    name: String!
    metricspublicallyavailable: Boolean!
    score: [Score!]
    date: String!
  }
  type Query {
    companys: [Company]
    company(id: ID!): Company
    scores: [Score]
    score(id: ID!): Score
    agencys: [Agency]
    agency(id: ID!): Agency
  }
  type Mutation {
    addCompany(company: addCompanyInput!): Company
    deleteCompany(id: ID!): [Company]
    updateCompany(id: ID!, edits: EditCompanyInput): Company
  }
  input addCompanyInput {
    title: String!,
    disclosure: [String!]!
  }
  input EditCompanyInput {
    title: String,
    disclosure: [String!]
  }
`