import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(20)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Required'),
  number: Yup.string()
    .min(9, 'Format tel: xxx-xx-xx')
    .max(15, 'Format tel: xxx-xx-xx')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone is not valid'
    )
    .required('Required'),
});

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Required'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, {
      message: 'Please create a stronger password',
    })
    .required('Required'),
});

export { schema, registerSchema };
