import React, { Component } from 'react'
import SubQS from './SubQS'


class NewSubQ extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isValid: true,
      inEdit: false,
    }
  }


  // set the props to the state

  // componentDidMount() {
  //   //if we pass are passing down a value... then set this to be edited...
  //   if(this.props.i){
  //     this.setState( () => ({
  //       ...this.props.i,
  //     }))
  //   }

  // }

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
          ...this.props.i,
            ['question']:this.state.question,
            ['type']:this.state.type
        })

        this.setState(()=>({
          inEdit: false
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
      createNew: true
    }))
  }

  addSubInput(){
    this.setState(()=>({
      addSubInput: true
    }))
  }


  render () {

    const { i, addSubInput } = this.props

      return (
        <div>
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
        </div>
      )
    }
}

NewSubQ.propTypes = {
  // book:  PropTypes.object.isRequired,
  // updateBook: PropTypes.func.isRequired
}

export default NewSubQ;
