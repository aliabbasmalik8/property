import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from 'routes/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {indexRoutes.map(prop => (
          <Route path={prop.path} component={prop.component} key={prop.path} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();