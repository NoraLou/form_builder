import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import CreateView from './CreateView';
import Preview from './Preview';
import ExportView from './ExportView';
// import formInputs from '../utils/data';


// window.localStorage.setItem('formInputs', JSON.stringify(formInputs));
window.localStorage.clear()




class App extends Component {

  constructor(props) {
    super(props)
    this.getformInputs = this.getformInputs.bind(this)
    this.addParentInput = this.addParentInput.bind(this)
    // this.addSubInput = this.addInput.bind(this)
    this.state = {
      form : []
    }
  }

  // state = { form: []}

  getformInputs() {
    //let form = JSON.parse(localStorage.getItem('formInputs')) || [];
    //console.log("calling getformInputs :",  formInputs)
    // this.setState( () => ({ form }))

  }

  addParentInput(inputObject) {
    this.setState((currState) => ({ form : currState.push(inputObject) } ))

  }

  updateInput(key, inputObject) {
    //let newValue = this.state.form[key] = inputObject
    // this.setState( (currState)  => ({form}))
  }

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

            <Route exact path="/" render={ ()=> (
              <CreateView
                form={this.state.form}
                addParentInput={this.addParentInput}
                getformInputs={this.getformInputs}
              />
            )}/>

            <Route exact path="/preview" render={ ()=> (
              <Preview
                formInputs={this.state.form}
                addParentInput={this.addParentInput}
                getformInputs={this.getformInputs}
              />
            )}/>

            <Route exact path="/export" render={ ()=> (
              <ExportView
                formInputs={this.state.form}
                addParentInput={this.addParentInput}
                getformInputs={this.getformInputs}
              />
            )}/>

        </div>
      </div>
    );
  }
}

export default App;
