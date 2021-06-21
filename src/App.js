import './App.css';
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import Admin from './pages/Admin';

import Header from './components/Header';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/answers' exact component={Quiz} />
        <Route path='/questions' exact component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
