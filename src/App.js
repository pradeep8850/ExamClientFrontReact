import React from 'react';
import Register from './components/register/register';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
