import React, { Component } from 'react';
import { Switch, Route, withRouter, Link, NavLink } from 'react-router-dom'
import CreateView from './CreateView';
import Preview from './Preview';
import ExportView from './ExportView';


class App extends Component {

  render() {
    return (
      <div className="app">
        <nav>
          <div className="nav-main">
            <h1>Form Builder</h1>
            <ul className="tabs-nav" role="navigation">
              <NavLink
                activeClassName="is-active"
                exact
                to="/">
                <li>Create</li>
              </NavLink>
              <NavLink
                activeClassName="is-active"
                exact
                to="/preview">
                <li>Preview</li>
              </NavLink>
              <NavLink
                activeClassName="is-active"
                exact
                to="/export">
                <li>Export</li>
              </NavLink>
            </ul>
          </div>
        </nav>
        <div className="main">
          <Switch>
            <Route exact path="/" component={CreateView}/>
            <Route exact path="/preview" component={Preview}/>
            <Route exact path="/export" component={ExportView}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
