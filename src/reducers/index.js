import { combineReducers } from 'redux';

const userReducer = (currentUser=null, action) => {
  if(action.type === 'LOGIN'){
    return action.payload;
  }
  return currentUser; 
}

const questionReducer = (questions=[
  {
    id: 1,
    question: 'Captial of Finland is -',
    options: ['Oslo', 'Helsinki', 'Sydney', 'Ottoa'],
    answer: 'Helsinki'
  },
  {
    id: 2,
    question: 'What\'s the Capital of Bangladesh?',
    options: ['Khulna', 'Dhaka', 'Chittagong', 'Rajshahi'],
    answer: 'Dhaka'
  },
  {
    id: 3,
    question: 'The Currency of Bhutan is - ',
    options: ['Taka', 'Gultram', 'Rupia', 'Bath'],
    answer: 'Gultram'
  },
  {
    id: 4,
    question: 'The Mountain K2 is Located at - ',
    options: ['Pakistan-China Border', 'China-Bhutan Border', 'Tibat-Nepal Border', 'Bhutan-India Border'],
    answer: 'Pakistan-China Border'
  }, 
  {
    id: 5,
    question: 'The River Yangsikiang is Located at - ',
    options: ['South Korea', 'Japan', 'Philippines', 'China'],
    answer: 'China'
  }
], action) => {
  
  if(action.type === 'CREATE_QUESTION'){
    return [...questions, action.payload]
  }

  if(action.type === 'UPDATE_QUESTION'){
    return [...questions.filter(question => question.id !== action.payload.id), action.payload];
  }

  if(action.type === 'DELETE_QUESTION'){
    return questions.filter(question => question.id !== action.payload.id);
  }

  return questions;
}



const selectedQuestionReducer = (selectedQuestion=null, action) => {
  if(action.type === 'SELECTED_QUESTION'){
    return action.payload;
  }
  return selectedQuestion;
}

const addedQuestionReducer = (addedQuestion=null, action) => {
  if(action.type === 'ADDED_QUESTION'){
    return action.payload;
  }
  return addedQuestion;
}

export default combineReducers({
  user: userReducer,
  questions: questionReducer,
  selected: selectedQuestionReducer,
  added: addedQuestionReducer
});