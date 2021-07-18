import { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactList';
import Filter from './components/Filter';
import { contactsOperations, contactsSelectors } from './redux/contacts';

import st from './App.module.css';

function App({ fetchContacts, isLoading }) {
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

      {isLoading && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
