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
    inCreateNew: false
  }

  //When we click on the add Button we enter the in this.state.isCreateNew
  //when this.state.isCreateNew
  // ... we get an empty input box.. with no value...
  // ... we make a value...
  // ... ... check for value... and check for value...
  //... when we have both values ...
  // we call the


  componentDidMount() {
    this.props.getForm()
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.props = nextProps

    }
  }

  createNew() {
    this.setState({inCreateNew : true })
  }


  render() {

    const { form, addParentInput } = this.props
    const { inCreateNew } = this.state

    return (

      <div className="create-view">

        { form.length > 0 && form.map((i) => (
          <ParentQ
            addParentInput={addParentInput}
            key={i.key}
            i={i}
           />
        ))}

        { inCreateNew && (
          <div>
            <ParentQ addParentInput={addParentInput}/>
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



export default CreateView;

