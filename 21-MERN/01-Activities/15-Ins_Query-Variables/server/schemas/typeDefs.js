const typeDefs = `
  type Profile {
    _id: ID
    name: String
    skills: [String]!
  }

  type Query {
    profiles: [Profile]!
    # Important for Query Variables: The profile query field allows us to fetch the specific Profile data by using the profileId argument and providing a non-null ID value as the argument value
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
