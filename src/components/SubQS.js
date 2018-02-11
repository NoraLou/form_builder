import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'


const makeKey = (parent) => {
  console.log("makeKey :", makeKey)
  console.log(`${parent}-${uuid.v4()}`)
  return `${parent}-${uuid.v4()}`
}


const testNumberValues = (childAnswer, parenAnswer) => {
  let parenValues = parenAnswer.split('_')
  let operator = parenValues[0]
  let expectedVal = parenValues[1]
  //childAnswer
  if (operator === 'greaterThan') {
    return childAnswer > expectedVal
  } else if ( operator === 'lessThan') {
    return childAnswer < expectedVal
  } else if ( operator === 'equals') {
    return childAnswer === expectedVal
  } else {
    return false
  }
}


const SubQS = (props) => {

  const { children, parenQAnswers, indentVal, parentType } = props

  return (
      <div>

      { children.map( (child, i) => {

        let meetsCondition = parentType === 'num'
          ? testNumberValues(child.subQAnswer, parenQAnswers[0])
          : parenQAnswers.includes(child.subQAnswer)

          return (
            <div key={`${uuid.v4()}`}>
              { meetsCondition
                 ? <div>
                    <div>{child.question}</div>
                    { child.subQs && (
                      <SubQS
                        children={child.subQs}
                        parenQAnswers={child.parenQAnswers}
                        parentType={child.type }
                        indentVal={indentVal}
                      />
                    )}
                  </div>
                  : null
              }
            </div>
          )

      })}

      </div>
  )

}

export default SubQS;



