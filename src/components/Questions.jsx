import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Question from './Question';


const Questions = props => {

  let p = 0;

  const [answers, setAnswers] = useState({})

  const onChangeHandler = (e) => {
    setAnswers({...answers, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.hSubmit();
    window.scrollTo(0, 0);
    props.st.questions.forEach(question => {
      if(question.answer === answers[question.question]){
        p++;
      }
    })
    props.handlePoints(p);
    p = 0;
  }

  const renderedQuestions = props.st.questions.map((question, index) => <Question ques={question} key={index}/>)
  
  return (
    <div>
      <form class="w-3/4 mx-auto" onSubmit={(e) => onSubmit(e)} onChange={(e) => onChangeHandler(e)}>
        {renderedQuestions}
        <div class="text-center pb-10 pt-5">
          <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Submit Answer!"/>
        </div>
      </form>
    </div>
  )
  
}

const mapStateToProps = state => {
  return { st: state };
}

export default connect(mapStateToProps)(Questions);