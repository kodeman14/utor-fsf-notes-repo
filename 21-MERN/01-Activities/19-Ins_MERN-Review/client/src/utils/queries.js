// Important for useQuery: We bring in gql from the @apollo/client library to allow us to parse queries (and mutations) as template literals
import { gql } from '@apollo/client';

// Important for useQuery: Each query we'd like to be able to perform gets exported out of our queries.js utility
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

// Important for Query Variables: To successfully execute this GraphQL query, you would need to provide a non-null ID value for the profileId argument. This value is passed using the $profileId variable, which represents the placeholder for the actual value in the query.
export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;
