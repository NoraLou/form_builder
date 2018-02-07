import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import CreateView from './CreateView';
import Preview from './Preview';
import ExportView from './ExportView';


class App extends Component {

  componentDidMount() {
    console.log("calling componentDidMount APP View")
    console.log("this.props APP View: ", this.props.match)
  }





  render() {
    return (
      <div className="app">
        <nav>
          <div className="nav-main">
            <h1><Link to="/">Form Builder</Link></h1>
            <ul className="tabs-nav" role="navigation">
              <Link className="is-active" to="/"><li>Create</li></Link>
              <Link to="/preview"><li>Preview</li></Link>
              <Link to="/export"><li>Export</li></Link>
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
