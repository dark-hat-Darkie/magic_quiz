import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { selectedQuestion, createQuestion, updateQuestion, deleteQuestion, addedQuestion } from '../actions';

const Admin = props => {

  const history = useHistory();

  const [editedQuestion, setEditedQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if(!props.st.user){
      history.push('./');
    }

    if(props.st.user === 'user'){
      history.push('./answers')
    }
  }, [])

  const onUpdate = (e, question) => {
    e.preventDefault();
    props.updateQuestion({id: question.id, question: editedQuestion === '' ? question.question: editedQuestion, options: [option1 === '' ? question.options[0]:option1, option2 === '' ? question.options[1]:option2, option3 === '' ? question.options[2]:option3, option4 === '' ? question.options[3]:option4], answer: answer === '' ? question.answer : answer })
    props.selectedQuestion(null);
    setEditedQuestion('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setAnswer('');
  }

  const onAdd = (e) => {
    e.preventDefault();
    props.createQuestion({id: uuidv4(), question: editedQuestion, options: [option1, option2, option3, option4], answer })
    props.addedQuestion(null);
    setEditedQuestion('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setAnswer('');
  }


  const renderedQuestions = props.st.questions.map((question, index) => {
    if(props.st.selected && props.st.selected.question === question.question){
      return (
        <form class="w-1/5 flex flex-col justify-between mx-auto" onSubmit={(e) => onUpdate(e, question)}>
          Question {index+1}: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={editedQuestion} placeholder={question.question} onChange={(e) => setEditedQuestion(e.target.value)}/><br />
          Option 1: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={option1} placeholder={question.options[0]} onChange={(e) => setOption1(e.target.value)}/> <br />
          Option 2: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={option2} placeholder={question.options[1]} onChange={(e) => setOption2(e.target.value)}/> <br />
          Option 3: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={option3} placeholder={question.options[2]} onChange={(e) => setOption3(e.target.value)}/> <br />
          Option 4: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={option4} placeholder={question.options[3]} onChange={(e) => setOption4(e.target.value)}/> <br />
          Answer: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={answer} placeholder={question.answer} onChange={(e) => setAnswer(e.target.value)}/> <br />
          <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" type="submit" value="Update" /> 
          <input class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2" type="submit" value="Cancel" onClick={() => props.selectedQuestion(null)}/>
        </form>
      )
    }
    
    else {
      return (
        <div key={index} class="w-2/4 mx-auto flex justify-between">
          <div>
            <p class="pt-4">Question {index+1}: <span>{question.question}</span></p>
          </div>
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => props.selectedQuestion(question)}> Edit </button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => props.deleteQuestion(question)}> Delete</button>
          </div>
        </div>
      )
    }
    
  })

  console.log(props.st);
  
  return (
    !props.st.added ?
    (<div class="bg-yellow-400 min-h-screen">
      <div class="container mx-auto">
        <h1 class="text-yellow-900 text-center text-6xl py-10 font-semibold">Admin Area</h1>
        {renderedQuestions}
        <div class="text-center mt-5">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => props.addedQuestion({id: uuidv4(), question: editedQuestion, options: [option1, option2, option3, option4], answer })}> Add Question </button>
        </div>
      </div>
    </div>) :
    (
      <form class="w-1/4 flex flex-col justify-between mx-auto" onSubmit={(e) => onAdd(e)}>
        Question: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={editedQuestion} onChange={(e) => setEditedQuestion(e.target.value)}/><br />
        Option 1: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={option1} onChange={(e) => setOption1(e.target.value)}/> <br />
        Option 2: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={option2} onChange={(e) => setOption2(e.target.value)}/> <br />
        Option 3: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={option3} onChange={(e) => setOption3(e.target.value)}/> <br />
        Option 4: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={option4} onChange={(e) => setOption4(e.target.value)}/> <br />
        Answer: <input class="ring-1 ring-green-500 p-1 focus:outline-none focus:ring focus:ring-green-500" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/> <br />
        <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" type="submit" value="Add Question" /> 
        <input class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2" type="button" value="Cancel" onClick={() => props.addedQuestion(null)}/>
      </form>
    )
  )
  
}

const mapStateToProps = state => {
  return { st: state };
}

export default connect(mapStateToProps, { selectedQuestion, updateQuestion, deleteQuestion, addedQuestion, createQuestion })(Admin);