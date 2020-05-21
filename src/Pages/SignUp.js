import React, { useState, useContext } from 'react';
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from 'reactstrap';

import firebase from 'firebase/app';
import { userContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const context = useContext(useContext);

  return (
    <div>
      <h1>Signup page</h1>
    </div>
  );
};

export default Signup;
