import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class CreateView extends Component {

    // state = {
    //   sortBy : this.voteSort
    // }

    // componentDidMount() {
    // }cd

    // componentWillReceiveProps( nextProps ) {
    // }

  componentDidMount() {
    console.log("calling compDidMount in the Create View")
    console.log("this.props createView: ", this.props.match)
  }


  render() {
    return (
      <div>
        <h1> I am the create View</h1>
      </div>
    )
  }
}


// function mapStateToProps({ posts, categories }) {

//   return {
//     posts : Object.keys(posts).map(key => posts[key]),
//     categories: [ {name:"all", path:'/'} , ...categories ]

//   }
// }

export default CreateView;

