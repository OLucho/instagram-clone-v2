import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Nav, Container, ContainerSearch, Img, ContainerOptions, Input } from './styles';

export const Header: React.FC = () => {
  const [term, setTerm] = useState('');

  const toggleClose = () => {
    setTerm('');
  };

  return (
    <>
      <Nav>
        <Container>
          <Link to="/">
            <Img src={logo} alt="logo" />
          </Link>
          <ContainerSearch>
            <FaSearch color="#ccc" size={15} />
            <Input placeholder="Search" value={term} onChange={(e) => setTerm(e.target.value)} />
          </ContainerSearch>

          <ContainerOptions>
            <Link to={`/profile/`}>
              <FaUser color="#222" size={25} />
            </Link>

            <FaSignOutAlt size={25} color="#222" />
          </ContainerOptions>
        </Container>
      </Nav>
    </>
  );
};
