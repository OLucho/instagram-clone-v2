/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck

import { Link, useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Container, Footer, Form, FormContainer, ErrorMessage, Logo, Description, Button } from './styles';
import Input from '../../components/input/Input';
import logo from '../../assets/logo.png';
import { getValidationErrors } from '../../utils/validation';
import { signIn } from '../../redux/user/userAction';
import { useDispatch } from 'react-redux';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [serverError, setServerError] = useState('');
  const dispatch = useDispatch();

  interface FormData {
    name: string;
    password: string;
  }

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      formRef.current.setErrors([]);
      const schema = Yup.object().shape({
        username: Yup.string().required('Username is Required').max(8),
        password: Yup.string().required('Password is Required').min(5),
      });
      await schema.validate(data, { abortEarly: false });

      await dispatch(signIn({ username: data.username, password: data.password }));
      history.push('/');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current.setErrors(errors);
      }
      if (error.response) {
        setServerError(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Logo src={logo} width="230px" />
          <Description>Log in to watch photos and videos </Description>
          {serverError && (
            <ErrorMessage>
              <p>{serverError}</p>
            </ErrorMessage>
          )}
          <hr />
          <Input name="username" placeholder="Enter your username" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit">Log In</Button>
          <hr />

          <Description className="footer">Watch what your friends have prepared for you</Description>
        </Form>

        <Footer>
          <p>
            Don't have an Account yet? <Link to="signup">Sign Up!</Link>
          </p>
        </Footer>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
