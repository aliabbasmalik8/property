import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type AppProps = { isPrivate: boolean, component: any, path: string, exact: boolean };

export default function RouteWrapper({
  component: Component,
  isPrivate,
  path,
  exact,
} : AppProps) {
  if (isPrivate && !localStorage.getItem('taskerToken')) {
    return <Redirect from={path} to='/accounts/signup' />;
  }
  return <Route path={path} exact={exact} component={Component} />;
}
