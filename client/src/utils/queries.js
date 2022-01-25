import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      email
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const QUERY_USER = gql`
  query allProfiles {
    profiles {
      _id
      username
      email
      bookCount
    }
  }
`;

export const QUERY_USERS = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
      email
      bookCount
    }
  }
`;
