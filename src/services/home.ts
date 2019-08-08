import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const USER_QUERY = gql`
  query User {
    user(login: "am-ma") {
      name
      bio
    }
  }
`;

const fetchUser = () => {
  return useQuery(USER_QUERY);
};

const home = {
  fetchUser,
};

export default home;
