import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './Login.scss';
import { login } from '../../../Services/api/index';
import {
  validateEmail,
  validatePassword,
} from '../../../Services/validators/validators';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    login({ email, password, rememberMe }).then((res) => {
      if (!res) {
        setIsError(true);
        setErrorMessage('Server Error');
      } else if (res.status === 400) {
        setIsError(true);
        setErrorMessage(`Login failed - ${res.data.message}`);
      } else if (res.status === 200) {
        let loginSuccess = new CustomEvent('UserAuthorised', {
          detail: res,
        });
        window.dispatchEvent(loginSuccess);
      }
    });
  }
  return (
    <div className="FormWrapper">
      {isError ? <p>{errorMessage}</p> : null}
      <Form onSubmit={handleSubmit} className="Form Login">
        <Form.Group controlId="email" className="FormInputGroup">
          <Form.Label className="FormInputLabel">Email</Form.Label>
          <Form.Control
            className="FormInputControl"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" className="FormInputGroup">
          <Form.Label className="FormInputLabel">Password</Form.Label>
          <Form.Control
            className="FormInputControl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button
          type="submit"
          disabled={false}
          className="FormSubmitButton LoginButton"
        >
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
