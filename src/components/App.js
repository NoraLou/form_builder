import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import CreateView from './CreateView';
import Preview from './Preview';
import ExportView from './ExportView';
//import form from '../utils/data';

//window.localStorage.clear()
//window.localStorage.setItem('form', JSON.stringify(form));

class App extends Component {

  constructor(props) {
    super(props)
    this.getForm = this.getForm.bind(this)
    this.addParentInput = this.addParentInput.bind(this)
    // this.addSubInput = this.addInput.bind(this)
    this.state = {
      form : []
    }
  }

  getForm() {
    let form = JSON.parse(localStorage.getItem('form')) || [];
    // console.log("form :", form)
    this.setState( () => ({ form }))
    return form
  }

  // just add one for now...
  // deal with adding a key and checking for values later...

  addParentInput(inputObject) {

    //console.log("inputObject :", inputObject)
    const {form} = this.state
    const key = form.length
    form.push(inputObject)
    this.setState(()=>({form}))
    localStorage.setItem('form', JSON.stringify(form));
    //console.log("after adding Parent Input :", this.state.form)


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
                getForm={this.getForm}
              />
            )}/>

            <Route exact path="/preview" render={ ()=> (
              <Preview
                formInputs={this.state.form}
                addParentInput={this.addParentInput}
                getForm={this.getForm}
              />
            )}/>

            <Route exact path="/export" render={ ()=> (
              <ExportView
                formInputs={this.state.form}
                addParentInput={this.addParentInput}
                getForm={this.getForm}
              />
            )}/>

        </div>
      </div>
    );
  }
}

export default App;
