import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Nav, Container, ContainerSearch, ContainerOptions, Input } from './styles';
import Logo from '../logo';
import Search from '../search';

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
            <Logo src={logo} width="130px" />
          </Link>
          <ContainerSearch>
            <FaSearch color="#ccc" size={15} />
            <Input placeholder="Search" value={term} onChange={(e) => setTerm(e.target.value)} />
            {term.length > 0 && <Search toggleClose={toggleClose} />}
          </ContainerSearch>

          <ContainerOptions>
            <ModalUploadPhoto />
            <Link to={`/profile/${user && user.username}`}>
              <FaUser color="#222" size={25} />
            </Link>

            <FaSignOutAlt onClick={signOut} size={25} color="#222" />
          </ContainerOptions>
        </Container>
      </Nav>
    </>
  );
};
