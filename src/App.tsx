import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './graphql-client';

const Home = lazy(() => import('./views/containers/Home'));
const Repository = lazy(() => import('./views/containers/Repository'));

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/repository">Repository</Link>
            </li>
          </ul>
        </header>
        <article>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/repository" component={Repository} />
              <Route path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </article>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
