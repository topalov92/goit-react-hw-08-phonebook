import React, { useState, useEffect, Suspense } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/react';
import CircleLoader from 'react-spinners/CircleLoader';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
import Form from './ContactForm/ContactForm';
import Modal from './Modal/Modal';
import ContactsView from '../view/ContactsView/ContactsView';
import * as authSelector from 'redux/reduxAuth/authSelector';
import Header from 'components/Header';
import RegisterView from 'view/RegisterView';
import LoginView from 'view/LoginView';
import * as authOperation from '../redux/reduxAuth/authOperation';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import phonebook from '../icon/phonebook.jpg';

const override = css`
  display: block;
  margin: 50px;
  border-color: red;
`;

const App = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(authSelector.getToken);
  const isLoader = useSelector(authSelector.getIsLoader);
  const toggleIsVisible = () =>
    setIsVisibleModal(s => {
      return !s;
    });

  useEffect(() => {
    if (token === null) {
      return;
    }
    dispatch(authOperation.fetchByToken());
  }, [dispatch, token]);

  return isLoader ? (
    <CircleLoader color="orange" loading={isLoader} css={override} size={50} />
  ) : (
    <>
      <Header />
      <Suspense fallback={<p>Loading.....</p>}>
        <Switch>
          <Route exact path="/">
            <img src={phonebook} width="400px" alt="phone"></img>
          </Route>

          <PrivateRoute exact path="/contacts" urlFToRedirect="/login">
            <ContactsView toggleIsVisible={toggleIsVisible} />
          </PrivateRoute>

          <PublicRoute
            exact
            path="/register"
            urlFToRedirect="/contacts"
            restricted
          >
            <RegisterView />
          </PublicRoute>
          <PublicRoute
            exact
            path="/login"
            urlFToRedirect="/contacts"
            restricted
          >
            <LoginView />
          </PublicRoute>
        </Switch>
      </Suspense>
      <ToastContainer />
      <Modal toggleIsVisible={toggleIsVisible} isVisibleModal={isVisibleModal}>
        <Form setIsVisibleModal={setIsVisibleModal} />
      </Modal>
    </>
  );
};

export default connect()(App);