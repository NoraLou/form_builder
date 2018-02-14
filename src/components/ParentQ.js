import React, { Component } from 'react'
import SubQS from './SubQS'
// import PropTypes from 'prop-types'

class ParentQ extends Component {

  state = {
    question:"",
    type: "none",
    isValid: true,
    inEdit: false,
    inCreateNew: false,
    touched: {
      question: false,
      type: false
    }
  }

  // set the props to the state

  componentDidMount() {
    //if we pass are passing down a value... then set this to be edited...
    if(this.props.i){
      this.setState( () => ({
        ...this.props.i,
        inEdit: false
      }))
    }

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
      inEdit : true
    })
  }

  //check each input field for validity...
  handleBlur = (e) => {

    this.state.touched[e.target.name] = true
    this.state.inEdit = true
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
        this.setState(()=>({ }))
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


  render () {

    const { i, mode } = this.props

      return (
        <div>
          <div className="card is-parent" style={ this.state.inEdit ? {'border': 'solid 2px blue'} : {} }>
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
            { this.state.inEdit
              ? <div>
                  {!this.state.isValid && (
                    <h4> Please check that both values are selected</h4>
                  )}
                </div>
              : <div>
                  <button className='btn h5'>Delete</button>
                  <button className='btn h5'>Add Sub-Input</button>
                </div>
            }
           </div>
            { i && i.subQs && (
              <SubQS
                children={i.subQs}
                parenQAnswers={i.parenQAnswers}
                indentVal={0}
                parentType={i.type}
              />
            )}
        </div>
      )
    }
}

ParentQ.propTypes = {
  // book:  PropTypes.object.isRequired,
  // updateBook: PropTypes.func.isRequired
}

export default ParentQ;
