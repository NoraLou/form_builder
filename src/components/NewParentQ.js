import React, { Component } from 'react'
import SubQS from './SubQS'
// import PropTypes from 'prop-types'

const defaultState = {
    question:"",
    type: "none",
    isValid: true,
    isCreateNew: false,
    inEdit: true,
    touched: {
      'question': false,
      'type': false
    }
}

class NewParentQ extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...defaultState
    }
  }

  componentDidMount() {


  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.props = nextProps

    }
  }

  fieldChange = (e) => {
    this.state.inEdit = true
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  //check each input field for validity...
  handleBlur = (e) => {

    this.state.touched[e.target.name] = true
    let checkVal = this.state[e.target.name]
    let isfieldValid = this.inputValid(checkVal)

    //if change is valid check other value and submit
    if (isfieldValid) {
      e.target.classList.remove("invalid")
      if (this.validBeforeSubmit()) {
        this.setState((currState) => ({
          isValid : true,
          inEdit : false
        }))
        this.props.addParentInput({
          question: this.state.question,
          type: this.state.type
        })
        this.setState(()=>({
          ...defaultState
        }))
      } else {
        return false
      }

    // if change is not valid... add class and return
    } else {
      e.target.classList.add("invalid")
      this.setState((currState) => ({ isValid : false}))
      return false
    }

  }

  inputValid = (val) => {
    return ( val !== '' && val !== " " && val !== "none")

  }

  validBeforeSubmit = () => {
    return (this.inputValid(this.state.type) && this.inputValid(this.state.question))
  }

  createNew(){
    this.setState(()=>({
      isCreateNew: true
    }))
  }

  setDefault(){
    this.setState(()=> ({
      ...defaultState
    }))
  }


  render () {

      return (

        <div>
          {this.state.isCreateNew && (
            <div className="card is-parent" style={{'border': 'solid 2px blue' }}>
              <div className="form-row">
              <label>Question</label>
                <input
                  name="question"
                  onChange={this.fieldChange}
                  onBlur={this.handleBlur}
                  value={this.state.question}>
                </input>
              </div>
              <div className="form-row">
                <label>Type</label>
                <div className="custom-dropdown">
                  <select
                    name="type"
                    onChange={this.fieldChange}
                    onBlur={this.handleBlur}
                    value={this.state.type}>
                    <option value="none" disabled> Select type...</option>
                    <option value="boolean">Yes/No</option>
                    <option value="text">Text</option>
                    <option value="num">Number</option>
                  </select>
                </div>
              </div>
              <div>
              {!this.state.isValid && (
                <h4> Please check that both values are selected</h4>
              )}
                <button className='btn h5' onClick={()=> this.setDefault()}>Delete</button>
              </div>
            </div>
          )}

          <button className='btn btn-large h2'
            onClick ={()=>this.createNew()}>
            Add Input
          </button>


        </div>
      )
    }
}

NewParentQ.propTypes = {
  // book:  PropTypes.object.isRequired,
  // updateBook: PropTypes.func.isRequired
}

export default NewParentQ;
