import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import actions from './contactsActions';

const contacts = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.removeContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),

});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });