import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'


const makeKey = (parent) => {
  console.log("makeKey :", makeKey)
  console.log(`${parent}-${uuid.v4()}`)
  return `${parent}-${uuid.v4()}`

}

const SubQS = (props) => {

  const { children, parentValues, indentVal } = props

  return (
    <div>
      { children.map( (child, i) => {
        let meetsCondition = parentValues.includes(child.condition)
        let nestingVal = meetsCondition ? indentVal + 20 : 0
        return (
          <div>
            <div style={{'marginLeft': nestingVal + 'px'}} key={`${uuid.v4()}`}>{child.question}</div>
            { child.subQs && (
              <SubQS
                children={child.subQs}
                parentValues={child.values}
                indentVal={nestingVal}
                key={`${uuid.v4()}`}
              />
            )}
          </div>
          )
      })}
    </div>
  )

}

export default SubQS;


