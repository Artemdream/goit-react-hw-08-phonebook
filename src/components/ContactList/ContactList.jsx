import { Loader } from 'components/Loader/loader';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilterContact, selectIsLoading } from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import './ContactList.styled.js';
import { Container } from './ContactList.styled.js';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContact);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Container>{isLoading && <Loader />}</Container>
      {filterContacts.length > 0 && (
        <ul>
          {filterContacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
