import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

const CURRENT_REPOSITORY_QUERY = gql`
  query CurrentRepository {
    repository(name: "try-react-graphql", owner: "am-ma") {
      id
      name
      url
      viewerHasStarred
    }
  }
`;

const ADD_STAR = gql`
  mutation AddStar($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const REMOVE_STAR = gql`
  mutation RemoveStar($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const fetchCurrentRepository = () => {
  return useQuery(CURRENT_REPOSITORY_QUERY);
};

const addStar = () => {
  return useMutation(ADD_STAR);
};

const removeStar = () => {
  return useMutation(REMOVE_STAR);
};

const toggleStar = {
  fetchCurrentRepository,
  addStar,
  removeStar,
};

export default toggleStar;
