import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const removeContact = createAction('contscts/remove');
const changeFilter = createAction('contacts/changeFilter');

export default { addContact, removeContact, changeFilter };