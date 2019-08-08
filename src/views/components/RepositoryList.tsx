import React, { FunctionComponent } from 'react';

// todo: any
type Props = {
  repositoryEdges: Array<any>;
};
const RepositoryList: FunctionComponent<Props> = props => {
  const { repositoryEdges } = props;
  return (
    <>
      {repositoryEdges.map((edge: any) => (
        <p key={edge.node.url}>
          <a href={edge.node.url}>{edge.node.resourcePath}</a>
        </p>
      ))}
    </>
  );
};

export default RepositoryList;
