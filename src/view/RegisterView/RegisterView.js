import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import * as authOperation from '../../redux/reduxAuth/authOperation';
import styles from './Register.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();

  const onSubmit = ev => {
    ev.preventDefault();
    const {
      target: { name, email, password },
    } = ev;

    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(authOperation.register(data));
  };

  return (
    <Form className={styles.Form} onSubmit={onSubmit}>
      <h2 className={styles.Text}>Registration</h2>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          autoComplete="on"
          required
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name="name"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          required
          autoComplete="on"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="email@test.com"
          name="email"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="******"
          name="password"
          autoComplete="off"
          required
        />
      </Form.Group>

      <Button className={styles.Button} variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegisterView;