import React, { FunctionComponent, useState } from 'react';
import repository from '~/services/repository';
import RepositoryList from '../components/RepositoryList';
import { useApolloClient } from '@apollo/react-hooks';

type Props = {};
const Repository: FunctionComponent<Props> = () => {
  const client = useApolloClient();

  const [repositoryName, setRepositoryName] = useState('react');
  const [repositoryCount, setRepositoryCount] = useState(0);
  const [repositoryEdges, setRepositoryEdges] = useState([]);

  const onChangeRepositoryName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepositoryName(event.target.value);
  };
  const onClickSearchButton = async () => {
    const { data } = await repository.manuallyFetchRepositories(client, repositoryName);
    console.log(data);
    if (data) {
      if (data.search.repositoryCount) {
        setRepositoryCount(data.search.repositoryCount);
      }
      if (data.search.edges) {
        setRepositoryEdges(data.search.edges);
      }
    }
  };

  return (
    <>
      <h1>Repository</h1>
      <input type="text" value={repositoryName} onChange={onChangeRepositoryName} />
      <button type="button" onClick={onClickSearchButton}>
        Search
      </button>
      <div>hit: {repositoryCount}</div>
      <RepositoryList repositoryEdges={repositoryEdges} />
    </>
  );
};

export default Repository;
