import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLogin } from '../actions'

const Login = props => {

  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [error, setError] = useState('');

  const onSubmitHandle = (e) => {
    e.preventDefault();

    if(userName === 'admin' && passWord === 'admin'){
      props.userLogin(userName);
      history.push('./questions');
    }

    if(userName === 'user' && passWord === 'user'){
      props.userLogin(userName);
      history.push('./answers');
    }
  }

  return (
    <div class="w-full h-screen flex items-center justify-center">
        <form class="w-full md:w-1/3 bg-white rounded-lg" onSubmit={(e) => onSubmitHandle(e)}>
            <div class="flex font-bold justify-center mt-6">
                <img class="h-20 w-20"
                    src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"/>
            </div>
            <h2 class="text-3xl text-center text-gray-700 mb-4">Login To MagicQuiz!</h2>
            <div class="px-12 pb-10">
                <div class="w-full mb-2">
                    <div class="flex items-center">
                        <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input type='text' placeholder="Username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            class="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="flex items-center">
                        <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                        <input type='password' placeholder="Password"
                            value={passWord}
                            onChange={(e) => setPassWord(e.target.value)}
                            class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <button type="submit"
                    class="w-full -ml-3 py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none">Login</button>
            </div>   
            <div class="flex flex-row justify-between">
              <div>
                <p>Admin login:</p>
                <p>username: admin</p>
                <p>password: admin</p>
              </div>
              <div>
                <p>User login:</p>
                <p>username: user</p>
                <p>password: user</p>
              </div>
            </div>
        </form>
    </div>
  )
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps, { userLogin })(Login);