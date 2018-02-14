import React, { Component } from 'react'
import '../styles/CreateView.css'
// import PropTypes from 'prop-types'
import ParentQ from './ParentQ'
import NewParentQ from './NewParentQ'


class CreateView extends Component {

  // static propTypes = {
  //   books:  PropTypes.array.isRequired,
  //   updateBooks: PropTypes.func.isRequired,
  //   getBookShelf: PropTypes.func.isRequired
  // }

  state = {
    inCreateNew: false
  }


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
            mode={this.state.createNew}
           />
        ))}

        <NewParentQ addParentInput={addParentInput}/>

      </div>
    )
  }


}



export default CreateView;

