import React, { Component } from 'react'
import SubQS from './SubQS'
// import PropTypes from 'prop-types'

class ParentQ extends Component {

  state = {

  }

  render () {

    const { i, mode } = this.props

      return (
        <div>
          <div className="card is-parent">
            <div className="form-row">
            <label>Question</label>
              <input
                onChange={this.onChangeInput}
                value={i && i.question}>
              </input>
            </div>
            <div className="form-row">
              <label>Type</label>
              <div className="custom-dropdown">
                <select
                  onChange={this.onChangeInput}
                  value={i && i.type}>
                  <option value="boolean">Yes/No</option>
                  <option value="text">Text</option>
                  <option value="num">Number</option>
                </select>
              </div>
            </div>
            <button className='btn h5'>Delete</button>
            <button className='btn h5'>Add Sub-Input</button>
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
