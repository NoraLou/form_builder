import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Nav extends Component {

    // state = {
    //   sortBy : this.voteSort
    // }

    // componentDidMount() {
    // }cd

    // componentWillReceiveProps( nextProps ) {

        // <h1><Link to="/">Form Builder</Link></h1>
            // <ul className="tabs-nav" role="navigation">
            //   <Link className="is-active" to="/"><li>Create</li></Link>
            //   <Link to="/preview"><li>Preview</li></Link>
            //   <Link to="/export"><li>Export</li></Link>
            // </ul>




    // }

  componentDidMount() {
    console.log("calling compDidMount in the NAV View")
    console.log("this.props NavView: ", this.props.match)
  }


  render() {
    return (
        <nav>
          <div className="nav-main">
            I AM THE NAV
          </div>
        </nav>
    )
  }
}


// function mapStateToProps({ posts, categories }) {

//   return {
//     posts : Object.keys(posts).map(key => posts[key]),
//     categories: [ {name:"all", path:'/'} , ...categories ]

//   }
// }

export default Nav;

