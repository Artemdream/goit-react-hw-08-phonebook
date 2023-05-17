import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { logIn } from 'redux/auth/operation';
import {
  BtnLogIn,
  Container,
  ErrorMessage,
  Field,
  FormLabel,
  Title,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(logIn(values));
  };

  return (
    <Container>
      <Title>Enter your account</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
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

          <BtnLogIn type="submit">Log In</BtnLogIn>
        </Form>
      </Formik>
    </Container>
  );
};
