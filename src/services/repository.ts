import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

export const SEARCH_REPOSITORY_QUERY = gql`
  query SearchRepository($query: String!) {
    search(query: $query, type: REPOSITORY, first: 20) {
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

const useLazyFetchRepositories = () => {
  return useLazyQuery(SEARCH_REPOSITORY_QUERY);
};

const repository = {
  useLazyFetchRepositories,
};

export default repository;
