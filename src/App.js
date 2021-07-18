import { useEffect } from 'react';
import { connect } from 'react-redux';

import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactList';
import Filter from './components/Filter';
import contactsOperations from './redux/contacts/contacts-operations';

import st from './App.module.css';

function App({ fetchContacts }) {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className={st.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
