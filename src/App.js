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

// Components AKA Pages

function App() {
  return (
    <div>
      <h1>App Component</h1>
    </div>
  );
}

export default App;
