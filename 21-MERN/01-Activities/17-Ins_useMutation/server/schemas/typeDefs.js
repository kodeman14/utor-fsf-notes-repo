const typeDefs = `
  type Profile {
    _id: ID
    name: String
    skills: [String]!
  }

  type Query {
    profiles: [Profile]!
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
