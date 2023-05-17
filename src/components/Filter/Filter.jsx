import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/filterSlice';
import './Filter.styled.js';
import { Container, FilterInput, Title } from './Filter.styled.js';

export const Filter = () => {
  const dispatch = useDispatch();

  const getVisibleContacts = ({ target: { value } }) => {
    dispatch(setFilterContacts(value));
  };

  return (
    <Container>
      <Title>Find contacts by name</Title>
      <FilterInput
        type="text"
        name="filter"
        onChange={getVisibleContacts}
      ></FilterInput>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
