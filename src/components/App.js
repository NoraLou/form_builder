import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import CreateView from './CreateView';
import Preview from './Preview';
import ExportView from './ExportView';
import formInputs from '../utils/data';


window.localStorage.setItem('formInputs', JSON.stringify(formInputs));




class App extends Component {

  // constructor(props){
  //   super(props)
  //   // this.getForm = this.getForm.bind(this)
       // this.addInput/ this.addSubInput
       // this.removeInput
  // }


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
