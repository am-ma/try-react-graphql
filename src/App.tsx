import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './graphql-client';

const Home = lazy(() => import('./views/containers/Home'));
const Repository = lazy(() => import('./views/containers/Repository'));

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/repository" component={Repository} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
