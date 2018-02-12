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

  // state = {
  //   // modal: isClosed
  // }


  componentDidMount() {
    this.props.getformInputs()
    // console.log("componentDidMount***************")
    // console.log("this.props : ", this.props)
    // console.log("componentDidMount***************")
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.props = nextProps
      // console.log("componentWillReceiveProps***************")
      // console.log("this.props : ", this.props)
      // console.log("NextProps*******************************")
    }
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

    const { form, addInput } = this.props

    return (

      <div className="create-view">

        { form.length > 0 && form.map((i) => (
          <ParentQ
            key={i.key}
            i={i}
           />
        ))}

        <button className='btn btn-large h2'

        >Add Input</button>
      </div>
    )
  }


}



export default CreateView;

