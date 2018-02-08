import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/CreateView.css'


class CreateView extends Component {

  componentDidMount() {
    // console.log("calling compDidMount in the Create View")
    // console.log("this.props createView: ", this.props)
  }


  render() {
    return (
      <div className="create-view">
        <div className="card is-parent">
          <div className="form-row">
            <label>Question</label>
            <input
              readOnly
              value="Do you own a car?">
            </input>
          </div>
          <div className="form-row">
            <label>Type</label>
            <div className="custom-dropdown">
              <select>
                  <option>Sherlock Holmes</option>
                  <option>The Great Gatsby</option>
                  <option>V for Vendetta</option>
                  <option>The Wolf of Wallstreet</option>
                  <option>Quantum of Solace</option>
              </select>
            </div>
          </div>
            <button className='btn h5'>Delete</button>
            <button className='btn h5'>Add Sub-Input</button>
        </div>

        <div className="card is-child">
          <div className="form-row">
            <label>Condition</label>
            <div className="custom-dropdown is-condition-q">
              <select>
                <option>Greater Than</option>
                <option>Less Than</option>
                <option>Equals</option>
              </select>
            </div>
            <div className="custom-dropdown is-condition-a">
              <select>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <label>Question</label>
            <input></input>
          </div>
          <div className="form-row">
            <label>Type</label>
            <div className="custom-dropdown">
              <select>
               <option>Greater Than</option>
                <option>Less Than</option>
                <option>Equals</option>
              </select>
            </div>
          </div>
            <button className='btn h5'>Delete</button>
            <button className='btn h5'>Add Sub-Input</button>
        </div>

        <div className="card is-child">
          <div className="form-row">
            <label>Condition</label>
            <div className="custom-dropdown is-condition-q">
              <select>
                <option>Greater Than</option>
                <option>Less Than</option>
                <option>Equals</option>
              </select>
            </div>
            <input className="is-condition-a" value="Toyota">

            </input>
          </div>
          <div className="form-row">
            <label>Question</label>
            <input></input>
          </div>
          <div className="form-row">
            <label>Type</label>
            <div className="custom-dropdown">
              <select>
               <option>Greater Than</option>
                <option>Less Than</option>
                <option>Equals</option>
              </select>
            </div>
          </div>
            <button className='btn h5'>Delete</button>
            <button className='btn h5'>Add Sub-Input</button>
        </div>


        <button className='btn btn-large h2'>Add Input</button>
      </div>
    )
  }


}



export default CreateView;

