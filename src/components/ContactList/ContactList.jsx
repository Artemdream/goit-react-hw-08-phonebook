import { Loader } from 'components/Loader/loader';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilterContact, selectIsLoading } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import '../ContactList/ContactList.css';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContact);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <div className="contact-list">{isLoading && <Loader />}</div>
      {filterContacts.length > 0 && (
        <ul>
          {filterContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
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
