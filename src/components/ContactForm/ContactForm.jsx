import { Formik, Form } from 'formik';
import { schema } from '../Utils/Validate';
import './ContactForm.style.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';
import {
  BtnLogIn,
  ErrorMessage,
  Field,
  FormLabel,
} from 'components/LoginForm/LoginForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = newContact => {
    const normalizeName = newContact.name.toLowerCase();
    console.log(newContact.number);
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizeName
    )
      ? toast.error(`${normalizeName} is already in contacts.`)
      : dispatch(
          addContact(newContact),
          toast.success(`${newContact.name} add in contacts book`),
          console.log(contacts)
        );
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormLabel>
          Name
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component={'span'} />
        </FormLabel>

        <FormLabel>
          Number
          <Field type="tel" name="number" placeholder="xxx-xx-xx" />
          <ErrorMessage name="number" component={'span'} />
        </FormLabel>
        <BtnLogIn type="submit">Add contact</BtnLogIn>
      </Form>
    </Formik>
  );
};
