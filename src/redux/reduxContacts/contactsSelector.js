import { createSelector } from "@reduxjs/toolkit";

const getContacts = state => state.constacts;
const getItems = state => state.contacts.items;
const getFilter = state => state.constacts.filter;
const getIsLoading = state => state.contacts.isLoading;
export const getIsEmpty = state => state.constacts.isEmpty;

const visibleItems = createSelector([getItems, getFilter], (items, filter) =>
    items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
);

export { getContacts, getItems, getFilter, getIsLoading, visibleItems };