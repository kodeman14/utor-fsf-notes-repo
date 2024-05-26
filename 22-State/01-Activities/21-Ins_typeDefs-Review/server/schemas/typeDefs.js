const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    authorId: ID!
    votes: Int
  }

  input PostData {
    id: Int!
    title: String
    authorId: ID!
    votes: Int
  }

  input AuthorData {
    id: Int!
    firstName: String
    lastName: String
    posts: [PostData]
  }

  type postResponse {
    success: Boolean
    post: Post
  }

  type authorResponse {
    success: Boolean
    author: Author
  }

  // crud -> r
  type Query {
    posts: [Post]
    authors: [Author]
    author(id: Int!): Author
    post(id: Int!): Post
  }

  // crud -> c/u/d
  type Mutation {
    createPost(post: PostData): postResponse
    createAuthor(author: AuthorData): authorResponse
  }
`;

module.exports = typeDefs;
