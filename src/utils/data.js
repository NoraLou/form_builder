

const formInputs =
[
   {
    question: "Do you own a car", key:"1", type: "boolean", parenQAnswers:['yes'],
      subQs: [

        { condition:'equals', subQAnswer:'yes', question: 'what is your cars model?', key:"1.1", type: 'text', parenQAnswers:['ford', 'toyota'],

          subQs: [
            { condition: 'equals', subQAnswer:'ford', question:'what color is your ford', key:"1.2,", type: 'text'
            },

            { condition: 'equals', subQAnswer:'ford', question:'how many wheels on your ford', key:"1.3", type:'num', parenQAnswers:['greaterThan_4'],

              subQs: [
                { condition: 'greaterThan', subQAnswer:'5', question: 'is your ford road legal?',  key:"1.3.1", type: "boolean", parenQAnswers:['yes', 'no'] }
              ]
            },

            {
              condition: 'equals', subQAnswer: 'toyota', question:'has your toyota been recalled ?',  key:"1.4", type: 'boolean'
            }
          ]
        },
      ]//subQsOne
    },

   {
    question: "what year was your building built", key:"2", type: "num"
   },

   {
    question: "what is your company name", key:"3", type: "text"
   },

]

export default formInputs

// const nestingIncrement = 20px

// let nestingVal

// myForm.map(parenQ => {

//   render => parenQ.question "do you have a car ? "
//   render => parenQ.type 'boolean'
//   render => parenQ.value "yes"

//   if (parenQ.subQs && parenQ.subQs.map(subQ){

//     //make Subinputs... do as a seperate function... that can be called recursively.
//     //base case could be that there is no condition.

//     if (parenQ.value === subQ.condition) {
//        //increment nesting value...
//       //subQ => card1



//       //subQ =>card2

//     }

//   })


// })
