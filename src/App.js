import React, { useState } from 'react';
import './App.css';
import 'bootsrtap/dist/css/bootstrap.min.css';

// react router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// toast
import 'react-toastify/dist/ReactTostify.min.css';

// firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// Context
import UserContext from './context/UserContext';

// Components AKA Pages
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import PageNotFound from './Pages/PageNotFound';
import { ToastContainer } from 'react-toastify';

const App = () => {
  // state for user
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      {/* pass the sate as provider. i.e context provider */}
      <UserContext.Provider value={{ user, setUser }}></UserContext.Provider>
    </Router>
  );
};

export default App;
