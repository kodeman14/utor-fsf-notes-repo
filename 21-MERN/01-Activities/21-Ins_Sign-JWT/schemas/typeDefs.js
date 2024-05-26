const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
    skills: [String]!
  }

  type ProfileToSend {
    _id: ID
    name: String
    email: String
    skills: [String]!
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type AuthenticatedProfile {
    token: ID!
    profile: ProfileToSend
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addProfile(name: String!, email: String!, password: String!): AuthenticatedProfile
    login(email: String!, password: String!): AuthenticatedProfile

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
