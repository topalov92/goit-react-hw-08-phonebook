import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import styles from './ContactList.module.css';
import { contactsOperation, contactsSelector } from '../../redux/reduxContacts';
import ContactList from '../../components/ContactList';
import ButtonBlack from 'components/Button/Button';
import Filter from 'components/Filter';
import empty from 'icon/empty.png';

const ContactsView = ({ toggleIsVisible }) => {
  const { items } = useSelector(contactsSelector.getContacts);
  const filteredItems = useSelector(contactsSelector.visibleItems);
  const dispatch = useDispatch();

  const isEmpty = useSelector(contactsSelector.getIsEmpty);

  useEffect(() => {
    dispatch(contactsOperation.fetchContactsOnServer());
  }, [dispatch, isEmpty]);

  return (
    <>
      <ButtonBlack type="button" onClick={toggleIsVisible}>
        Add contact
      </ButtonBlack>

      {items.length > 1 && <Filter />}

      {filteredItems.length ? (
        <ul className={styles.contacts}>
          {filteredItems.map(({ name, number, id }) => (
            <ContactList key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      ) : null}

      {!items[0] && isEmpty && (
        <>
          <p className={styles.notification}>"The phone book is empty"</p>{' '}
          <img src={empty} alt="empty phonebook"></img>
        </>
      )}

      {items[0] && !filteredItems.length && isEmpty && (
        <p className={styles.notification}>
          There is no such name in the database{' '}
        </p>
      )}
    </>
  );
};

export default connect()(ContactsView);