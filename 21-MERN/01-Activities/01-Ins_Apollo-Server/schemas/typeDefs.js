const typeDefs = `
  type Class {
    _id: ID
    name: String
    building: String
  }

  type Professor {
    _id: ID
    name: String
    studentScore: Int
  }

  type ClassHours {
    _id: ID
    creditHours: Int
    professor: Professor
  }

  type Query {
    classes: [Class]
    classHoursAll: [ClassHours]
    classHoursOne(id: ID!): ClassHours
  }
`;

module.exports = typeDefs;
