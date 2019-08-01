import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'

import HeaderFanimals from './components/MenuHomePage'
import Login from './pages/login'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'


const App = () => {
return (
 
    <Router>

      <div className="App">
      <HeaderFanimals />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/user" component={UserProfile}/>
      
   
      
      </div>
    </Router>
   
 
)
};
export default App