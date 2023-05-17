import PropTypes from 'prop-types';
import './ContactItem.style.js';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';
import { Contact, ContactBtn } from './ContactItem.style.js';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success('Contact is delete');
  };

  return (
    <Contact>
      <p>
        {name}: {number}
      </p>
      <ContactBtn type="button" onClick={handleDelete}>
        Delete
      </ContactBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
