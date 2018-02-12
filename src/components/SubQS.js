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


const findParentCondition = ( parentType, parenQAnswers ) => {
  if (parentType === 'boolean' || parentType === 'text') {
    return 'equals'
  }
  if (parentType === 'num') {
    return parenQAnswers[0].split('_')[0]
  }
}


const expectVal = (parentType, parenQAnswers, childAnswer) => {
  if (parentType === 'num') {
    return parenQAnswers[0].split('_')[1]
  } else {
    return childAnswer
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
                    <div style={{marginLeft:`${indentVal}px`}} className="card is-child">
                      <div className="form-row">
                        <label>Condition</label>
                        <div className="custom-dropdown is-condition-q">
                          <select readOnly
                            value={ findParentCondition(parentType, parenQAnswers) }>
                            <option value="greaterThan">Greater Than</option>
                            <option value="lessThan">Less Than</option>
                            <option value="equals">Equals</option>
                          </select>
                        </div>
                        <input className="is-condition-a"
                          value={ expectVal(parentType, parenQAnswers,child.subQAnswer)}
                          readOnly>
                        </input>
                      </div>

                      <div className="form-row">
                        <label>Question</label>
                        <input readOnly
                          value={child.question}>
                        </input>
                      </div>

                      <div className="form-row">
                        <label>Type</label>
                        <div className="custom-dropdown">
                          <select readOnly
                            value={child.type}>
                            <option value="num">Number</option>
                            <option value="text">Text</option>
                            <option value="boolean">Yes/No</option>
                          </select>
                        </div>
                      </div>
                      <button className='btn h5'>Delete</button>
                      <button className='btn h5'>Add Sub-Input</button>
                    </div>

                    { child.subQs && (
                      <SubQS
                        children={child.subQs}
                        parenQAnswers={child.parenQAnswers}
                        parentType={child.type }
                        indentVal={indentVal + 20}
                      />
                    )}
                  </div>
                : null
              }
            </div>// uuid
          )

      })}

      </div>
  )

}

export default SubQS;



