import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import st from './Filter.module.css';

const Filter = ({ onContactsFilter, value }) => {
  return (
    <div className={st.wrapper}>
      <label className={st.label}>
        Find contacts by name
        <input
          className={st.input}
          type="text"
          name="name"
          value={value}
          onChange={onContactsFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onContactsFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onContactsFilter: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
