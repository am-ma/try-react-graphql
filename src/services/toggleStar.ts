import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const CURRENT_REPOSITORY_QUERY = gql`
  query CurrentRepository {
    repository(name: "try-react-graphql", owner: "am-ma") {
      name
      url
      viewerHasStarred
    }
  }
`;
const fetchCurrentRepository = () => {
  return useQuery(CURRENT_REPOSITORY_QUERY);
};

const toggleStar = {
  fetchCurrentRepository,
};

export default toggleStar;
