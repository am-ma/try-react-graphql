import React from 'react';
import { FunctionComponent } from 'react';
import toggleStar from '~/services/toggleStar';

type Props = {};
const ToggleStar: FunctionComponent<Props> = () => {
  const { loading, data, error } = toggleStar.fetchCurrentRepository();
  const [addStar] = toggleStar.addStar();
  const [removeStar] = toggleStar.removeStar();

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  const currentRepos = data.repository;
  if (!currentRepos) return <p>current reppsitory not defined</p>;

  let hasStarred = currentRepos.viewerHasStarred;

  const onClickToggleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const variables = { input: { starrableId: currentRepos.id } };

    if (currentRepos.viewerHasStarred) {
      removeStar({ variables });
    } else {
      addStar({ variables });
    }
  };

  return (
    <>
      <h1>Toggle Star</h1>
      <h3>
        <a href={currentRepos.url} target="_blank" rel="noopener noreferrer">
          {currentRepos.name}
        </a>
      </h3>
      <button type="button" onClick={onClickToggleButton}>
        {hasStarred ? 'remove' : 'add'}
      </button>
    </>
  );
};

export default ToggleStar;
