import React, { Component } from 'react'
import '../styles/CreateView.css'
// import PropTypes from 'prop-types'
import ParentQ from './ParentQ'

class CreateView extends Component {

  // static propTypes = {
  //   books:  PropTypes.array.isRequired,
  //   updateBooks: PropTypes.func.isRequired,
  //   getBookShelf: PropTypes.func.isRequired
  // }

  state = {
    // modal: isClosed
  }

  formInputs = JSON.parse(localStorage.getItem('formInputs')) || [];


  componentDidMount() {
    console.log("create-view componentDidMount")
    console.log("formInputs :", this.formInputs)
  }

  onChangeInput() {
    console.log("onChangeInput")
  }

  onChangeSelect() {
    console.log("onChangeSelect")
  }

  // const renderChildComps = (parent) => {
  //   return
  // }



  render() {

    return (

      <div className="create-view">

        {this.formInputs.length && this.formInputs.map((i) => (
          <ParentQ
            key={i.key}
            i={i}
           />
        ))}

        <button className='btn btn-large h2'>Add Input</button>
      </div>
    )
  }


}



export default CreateView;

