import React from 'react';
import styled from 'styled-components/macro';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import { Routes } from './routes';

const fadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: opacity ease 200ms;
`;

const App: React.FC = ({}) => {
  return (
    <ModalProvider backgroundComponent={fadingBackground}>
      <Routes />
    </ModalProvider>
  );
};

export default App;
