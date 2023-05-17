import styled from 'styled-components';
import { ErrorMessage as FormikError, Field as FormikInput } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 30px 20px;
  max-width: 360px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

export const Title = styled.h2`
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  text-align: start;
  flex-direction: column;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
`;

export const Field = styled(FormikInput)`
  width: 100%;
  padding: 10px;
  margin-top: 4px;
  color: #4a5568;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  :focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px rgb(238, 182, 40);
  }
`;
export const ErrorMessage = styled(FormikError)`
  font-size: 12px;
  margin-top: 5px;
  color: rgb(255, 0, 0);
`;

export const BtnLogIn = styled.button`
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  padding: 10px 25px;
  border-radius: 5px;
  border: 1px solid rgb(238, 182, 40, 0.4);
  background-color: rgb(238, 182, 40);
  transition-duration: 250ms;

  :hover {
    box-shadow: rgb(255, 210, 95) 0px 1px 25px 0px,
      rgba(238, 182, 40) 0px 0px 0px 1px;
  }
  :active {
    background-color: rgb(255, 246, 222);
  }
`;
