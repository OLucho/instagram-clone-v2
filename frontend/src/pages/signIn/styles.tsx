import styled from 'styled-components/macro';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    align-items: flex-start;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: auto;
  @media (min-width: 450px) {
    max-width: 350px;
  }
`;

export const Logo = styled.img`
  width: 230px;
`;

export const Description = styled.span`
  text-align: center;
  color: #999;
  font-size: 20px;
  margin: 15px 0;
  &.footer {
    font-size: 12px;
  }
`;

export const Form = styled(Unform)`
  background: #fff;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 450px) {
    background: transparent;
    border: 0;
  }
  hr {
    width: 100%;
    color: #e6e6e6;
    margin: 30px 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 9px 9px;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  margin-top: 20px;
  font: bold 13.333px Arial;
  color: #fff;
  cursor: pointer;
  outline: 0px;
  &:hover {
    background-color: #38ff;
  }
`;

export const Footer = styled.div`
  background: #fff;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 20px 40px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    background: transparent;
    border: 0;
  }
  p {
    color: #999;
    font-size: 15px;
    a {
      color: #3897f0;
      text-decoration: none;
    }
  }
`;

export const ErrorMessage = styled.div`
  height: 2rem;
  p {
    color: #fc4850;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;
