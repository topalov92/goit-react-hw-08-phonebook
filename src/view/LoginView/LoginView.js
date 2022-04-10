import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import * as authOperation from '../../redux/reduxAuth/authOperation';
import styles from './Login.module.css';

const LoginView = () => {
  const dispatch = useDispatch();

  const onSubmit = ev => {
    ev.preventDefault();
    const {
      target: { email, password },
    } = ev;
    const data = {
      email: email.value,
      password: password.value,
    };
    dispatch(authOperation.login(data));
  };

  return (
    <>
      <Form className={styles.Form} onSubmit={onSubmit}>
        <h2 className={styles.Text}>Log in</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            autoComplete="on"
            placeholder="Add email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            name="email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Add password"
            name="password"
            title="password must have minimum 6 symbols"
            autoComplete="off"
            required
          />
        </Form.Group>

        <Button className={styles.Button} variant="dark" type="submit">
          Send
        </Button>
      </Form>
    </>
  );
};

export default LoginView;