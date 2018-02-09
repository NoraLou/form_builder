

const formInputs =
[
   {
    question: "Do you own a car", key:"1", type: "boolean", values:['yes', 'no'],
      subQs: [

        { condition:'yes', question: 'what is your cars model?', key:"1.1", type: 'text', values:['ford', 'toyota'],

          subQs: [
            { condition: 'ford', question:'what color is your ford', key:"1.2,", type: 'text', values:['green']
            },

            { condition: 'ford', question:'how many wheels on your ford', key:"1.3", type:'number', values:['greater than 4'],

              subQs: [
                { condition: 'greater than 4', question: 'is your ford road legal?',  key:"1.3.1", type: "boolean", values:['yes', 'no'] }
              ]
            },

            {
              condition: 'toyota', question:'has your toyota been recalled ?',  key:"1.4", type: 'boolean', values: ['yes', 'no']
            }
          ]
        },
      ]//subQsOne
    },

   {
    question: "what year was your building built", key:"2", type: "number", value: "greater than 1930",
   },

   {
    question: "what is your company name", key:"3", type: "text", value: "acme inc."
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
