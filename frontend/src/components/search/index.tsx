import React from 'react';
import { Container, ContainerResult, ContainerProfile, ContainerEmpty } from './styles';

interface SearchProps {
  toggleClose: React.Dispatch<React.SetStateAction<string>>;
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
