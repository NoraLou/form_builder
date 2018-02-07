import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Preview extends Component {

    // state = {
    //   sortBy : this.voteSort
    // }

    // componentDidMount() {
    // }

    // componentWillReceiveProps( nextProps ) {
    // }

  render() {

    return (
      <div>
        <h1> PREVIEW!!!!!!!!  </h1>
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

export default Preview;

