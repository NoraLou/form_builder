import React from 'react'
import SubQS from './SubQS'
// import PropTypes from 'prop-types'

import uuid from 'uuid'


const makeKey = (parent) => {
  console.log("makeKey :", makeKey)
  console.log(`${parent}-${uuid.v4()}`)
  return `${parent}-${uuid.v4()}`

}


const ParentQ = (props) => {
  const { i } = props
  return (
    <div>
      <div className="card is-parent">
        <div className="form-row">
        <label>Question</label>
          <input
            readOnly
            onChange={this.onChangeInput}
            value={i.question}>
          </input>
        </div>
        <div className="form-row">
          <label>Type</label>
          <div className="custom-dropdown">
            <select readOnly value={i.type}>
              <option value="boolean">Yes/No</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
          </div>
        </div>
        <button className='btn h5'>Delete</button>
        <button className='btn h5'>Add Sub-Input</button>
       </div>
        { i.subQs && (
          <SubQS
            children={i.subQs}
            parentValues={i.values}
            indentVal={0}
          />
        )}
    </div>
  )
}

ParentQ.propTypes = {
  // book:  PropTypes.object.isRequired,
  // updateBook: PropTypes.func.isRequired
}

export default ParentQ;
