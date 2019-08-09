import React, { FunctionComponent, useState } from 'react';
import repository from '~/services/repository';
import RepositoryList from '../components/RepositoryList';

type Props = {};
const Repository: FunctionComponent<Props> = () => {
  const [repositoryName, setRepositoryName] = useState('react');
  const [fetch, { loading, data, error }] = repository.useLazyFetchRepositories();

  // events
  const onChangeRepositoryName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepositoryName(event.target.value);
  };
  const onClickSearchButton = async () => {
    fetch({
      variables: { query: repositoryName },
    });
  };

  if (error) return <p>error! {error.message}</p>;

  // repos
  let repositories = <></>;
  if (loading) {
    repositories = <p>loading ...</p>;
  } else if (data && data.search.edges) {
    repositories = <RepositoryList repositoryEdges={data.search.edges} />;
  }

  return (
    <>
      <h1>Repository</h1>
      <input type="text" value={repositoryName} onChange={onChangeRepositoryName} />
      <button type="button" onClick={onClickSearchButton}>
        Search
      </button>
      <p>Hit: {data && data.search ? data.search.repositoryCount : '--'}</p>
      {repositories}
    </>
  );
};

export default Repository;
