const typeDefs = `
  type Profile {
    _id: ID
    name: String
    skills: [String]!
  }

  # Important for useQuery: We define our Query type to inform our entry points
  # The Query type is built-in to GraphQL, so we only need to extend it to include which kinds of information we plan to request in our application
  type Query {
    profiles: [Profile]!
    # Important for Query Variables: The profile query field allows us to fetch the specific Profile data by using the profileId argument and providing a non-null ID value as the argument value
    profile(profileId: ID!): Profile
  }

  # Important for useMutation: We define our Mutation type to inform our entrypoints
  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
