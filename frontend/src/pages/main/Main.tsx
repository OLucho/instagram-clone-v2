import { useEffect } from 'react';
import Layout from '../../components/wrapper';
import { Aside, ContainerOwner, ContainerFollows, ContainerFeeds, Container } from './styles';

export default function Main() {
  return (
    <>
      <Layout>
        <Container>
          <ContainerFeeds></ContainerFeeds>
        </Container>
      </Layout>
    </>
  );
}
