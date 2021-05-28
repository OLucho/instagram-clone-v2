/* eslint-disable react/no-unescaped-entities */
import { Link, useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Container, Footer, Form, FormContainer, ErrorMessage, Logo, Description, Button } from './styles';
import Input from '../../components/input/Input';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const formRef = useRef(null);
  const history = useHistory();

  const [serverError, setServerError] = useState('');

  const handleSubmit = async () => {
    console.log('submit');
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Logo src={logo} alt="logo" />
          <Description>Log in to watch photos and videos </Description>
          <hr />
          {serverError && (
            <ErrorMessage>
              <p>{serverError}</p>
            </ErrorMessage>
          )}
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
