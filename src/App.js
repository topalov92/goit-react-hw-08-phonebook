import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './components/Container/Container';
import  ContactForm  from './components/ContactForm/ContactForm';
import  ContactList  from './components/ContactList/ContactList';
import { Notification } from './components/Notification/Notification';
import Filter from './components/Filter/Filter';
import { H1Styled, H2Styled } from './App.styles';

const App = ({ contacts }) => {
  
  return (
    <Container>
      <H1Styled>PhoneBook</H1Styled>
      <H2Styled>Add contact</H2Styled>
      <ContactForm />

      <H2Styled>Contacts</H2Styled>
      {contacts.length > 0 ? (
        <>
           <Filter
            id={uuidv4()}
            label={'Find contacts by name'}
            placeholder={'Boris Britva'}
            name={'search'}
            />

          <ContactList />
        </>
      ) : (
        <Notification />
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  contacts: state.contactList.contacts,
});


export default connect(mapStateToProps)(App);