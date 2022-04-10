import axios from "axios";
import * as contactsAction from './contactsAction';
import * as store from '../mainStore';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContactsOnServer = () => async dispatch => {
  dispatch(contactsAction.fetchContactsRequest());
  try {
    const { data } = await axios('/contacts');

    dispatch(contactsAction.fetchContactsSuccess(data));

    dispatch(contactsAction.isEmpty(data[0] ? false : true));
  } catch (error) {
    dispatch(contactsAction.fetchContactsError(error.message));
  }
};

const fetchPostContactOnServer = dataContact => async dispatch => {
  dispatch(contactsAction.fetchContactsRequest());
  try {
    const { data } = await axios.post('/contacts', dataContact);
    dispatch(contactsAction.addContact(data));

    dispatch(contactsAction.isEmpty(false));
  } catch (error) {
    dispatch(contactsAction.fetchContactsError(error));
  }
};

const fetchDeleteContactOnServer = id => async dispatch => {
  dispatch(contactsAction.fetchContactsRequest());
  try {
    const data = await axios.delete(`/contacts/${id}`);
    console.log(data);
    dispatch(contactsAction.deleteContact(id));
    const length = store.store.getState().contacts.items.length;
    dispatch(contactsAction.isEmpty(length > 1 ? false : true));
  } catch (error) {
    dispatch(contactsAction.fetchContactsError(error));
  }
};
const contactsOperation = {
  fetchContactsOnServer,
  fetchPostContactOnServer,
  fetchDeleteContactOnServer,
};
export default contactsOperation;