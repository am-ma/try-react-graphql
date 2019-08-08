import { ApolloClient } from 'apollo-client';
import gql from 'graphql-tag';

export const SEARCH_REPOSITORY_QUERY = gql`
  query SearchRepository {
    search(query: "react", type: REPOSITORY, first: 20) {
      repositoryCount
      edges {
        cursor
        node {
          ... on Repository {
            url
            resourcePath
          }
        }
      }
    }
  }
`;

const manuallyFetchRepositories = (client: ApolloClient<object>, repositoryName: string) => {
  const query = repositoryName;

  return client.query({
    query: SEARCH_REPOSITORY_QUERY,
    variables: { query },
  });
};

const repository = {
  manuallyFetchRepositories,
};

export default repository;
