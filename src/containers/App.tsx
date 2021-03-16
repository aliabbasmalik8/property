import React, { Suspense } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import appRoutes from 'routes/routes';
import RouteWrapper from 'components/General/PrivtaeRoute';
import ErrorBoundary from 'components/General/ErrorBoundary';

function App() {
  const switchRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {appRoutes.map(route => (
          <RouteWrapper
            path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
            exact={route.exact}
            key={route.path}
          />
        ))}
      </Switch>
    </Suspense>
  );
  return (
    <ErrorBoundary>
      {switchRoutes}
    </ErrorBoundary>
  );
}

export default withRouter(App);
