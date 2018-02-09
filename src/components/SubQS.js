import React from 'react'
import PropTypes from 'prop-types'



const SubQS = (props) => {

  const { children, parentKey, parentValues, indentVal } = props

  return (
    <div>
      { children.map( (child) => {
        let meetsCondition = parentValues.includes(child.condition)
        let nestingVal = meetsCondition ? indentVal + 20 : 0
        return (
          <div>
            <div style={{'marginLeft': nestingVal + 'px'}} key={child.key}>{child.question}</div>
            { child.subQs && (
              <SubQS
                children={child.subQs}
                parentKey={child.key}
                parentValues={child.values}
                indentVal={nestingVal}
              />
            )}
          </div>
          )
      })}
    </div>
  )

}

export default SubQS;



