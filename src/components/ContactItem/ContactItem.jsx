import PropTypes from 'prop-types';
import '../ContactItem/ContactItem.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import toast from 'react-hot-toast';

export const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success('Contact is delete');
  };

  return (
    <li className="contact-item">
      <p>
        {name}: {phone}
      </p>
      <button className="item-btn" type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
