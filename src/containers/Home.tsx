import React, { FunctionComponent } from 'react';
import home from '~/services/home';

type Props = {};
type State = {};
const Home: FunctionComponent<Props> = () => {
  const { loading, data, error } = home.fetchUser();

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  const user = data.user;
  if (!user) return <p>current user not defined</p>;

  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </>
  );
};

export default Home;
