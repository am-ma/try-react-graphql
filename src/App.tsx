import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './graphql-client';
import TheHeader from './views/components/TheHeader';

const Home = lazy(() => import('./views/containers/Home'));
const Repository = lazy(() => import('./views/containers/Repository'));
const ToggleStar = lazy(() => import('./views/containers/ToggleStar'));

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <Grommet plain>
        <BrowserRouter>
          <TheHeader />
          <article>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/toggleStar" component={ToggleStar} />
                <Route path="/repository" component={Repository} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
              </Switch>
            </Suspense>
          </article>
        </BrowserRouter>
      </Grommet>
    </ApolloProvider>
  );
};

export default App;
