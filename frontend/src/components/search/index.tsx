import React from 'react';
import { Container, ContainerResult, ContainerProfile, ContainerEmpty } from './styles';
import { Profile } from '../profile';

interface SearchProps {
  toggleClose: () => void;
}

const Search: React.FC<SearchProps> = ({ toggleClose }) => {
  const loading = false;
  const users: any[] = [];

  if (loading) {
    return <p>spinner..</p>;
  }
  return (
    <Container>
      <ContainerResult>
        {users.length > 0 ? (
          users.map((user) => (
            <ContainerProfile key={user.id} onClick={toggleClose}>
              <Profile direction="row" img={user.avatar} username={user.username} name={user.name} />
            </ContainerProfile>
          ))
        ) : (
          <ContainerEmpty>
            <p>No Results •</p>
          </ContainerEmpty>
        )}
      </ContainerResult>
    </Container>
  );
};

export default Search;
