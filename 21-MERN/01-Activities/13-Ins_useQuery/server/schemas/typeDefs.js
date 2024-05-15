const typeDefs = `
type Profile {
  _id: ID
  name: String
  skills: [String]!
}

  # The Query type is built-in to GraphQL, so we only need to extend it to include which kinds of information we plan to request in our application
  # Important for useQuery: We define our Query type to inform our entry points
  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
