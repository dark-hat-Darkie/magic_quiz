export const userLogin = user => {
  return {
    type: 'LOGIN',
    payload: user
  };
};

export const userLogout = () => {
  return {
    type: 'LOGIN',
    payload: null
  };
};


export const createQuestion = question => {
  return {
    type: 'CREATE_QUESTION',
    payload: question
  }
}


export const updateQuestion = question => {
  return {
    type: 'UPDATE_QUESTION',
    payload: question
  }
}


export const deleteQuestion = question => {
  return {
    type: 'DELETE_QUESTION',
    payload: question
  }
}




export const selectedQuestion = question => {
  return {
    type: 'SELECTED_QUESTION',
    payload: question
  }
}

export const addedQuestion = question => {
  return {
    type: 'ADDED_QUESTION',
    payload: question
  }
}

export const answeredQuestions = answer => {
  return {
    type: 'ANSWER',
    payload: answer
  }
}