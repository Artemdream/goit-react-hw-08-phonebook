import { registerSchema } from 'components/Utils/Validate';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import {
  BtnLogIn,
  Container,
  ErrorMessage,
  Field,
  FormLabel,
  Title,
} from '../LoginForm/LoginForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(register(values));
  };

  return (
    <Container>
      <Title>Register</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
        validationSchema={registerSchema}
      >
        <Form autoComplete="off">
          <FormLabel>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component={'span'} />
          </FormLabel>

          <FormLabel>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component={'span'} />
          </FormLabel>

          <FormLabel>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component={'span'} />
          </FormLabel>

          <BtnLogIn type="submit">Register</BtnLogIn>
        </Form>
      </Formik>
    </Container>
  );
};
