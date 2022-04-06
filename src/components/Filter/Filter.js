import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contactsActions';
import { LabelStyled, InputStyled } from './Filter.styles';

const Filter = ({
  id,
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
  title,
  required,
  ...allProps
}) => {
  return (
    <>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled
        id={id}
        type={type}
        name={name}
        {...allProps}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        title={title}
        required={required}
      />
    </>
  );
};

Filter.defaultProps = {
  type: 'text',
  placeholder: '',
  title: '',
  required: false,
};

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  required: PropTypes.bool,
};

const mapStateToProps = state => ({
  value: state.contactList.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: evt => dispatch(contactsActions.changeFilter(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);