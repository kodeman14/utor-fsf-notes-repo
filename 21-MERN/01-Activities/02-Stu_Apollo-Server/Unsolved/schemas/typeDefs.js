const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
