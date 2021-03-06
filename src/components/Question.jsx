import React from 'react';

const Question = ({ques}) => {

  const { question, options} = ques;

  const renderedOptions = options.map(opt => {
    return (
      <div key={opt}>
        <input type="radio" id={opt} name={question} value={opt}/>
        <label htmlFor={opt}> {opt}</label>
      </div>
    )
  })

  return (
    <div class="m-4">
      <p class="text-xl">{question}</p>
      {renderedOptions}
    </div>
  )
}

export default Question;