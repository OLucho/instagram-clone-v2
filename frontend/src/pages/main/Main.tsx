import { useEffect } from 'react';
import Layout from '../../components/wrapper';
import { Aside, ContainerOwner, ContainerFollows, ContainerFeeds, Container } from './styles';
import { Profile } from '../../components/profile';
import { State } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import FeedCard from '../../components/FeedCard';

const Main: React.FC = () => {
  interface IFollow {
    id: number;
    username: string;
    avatar: string;
    name: string;
  }

  const follows: IFollow[] = [];

  const loading = false;
  const { user } = useSelector((state: State) => state.user);
  console.log(user);

  return (
    <Layout>
      <Container>
        <Aside>
          <ContainerOwner>
            <Profile img={user && user.avatar} username={user && user.username} isOwner name={user && user.name} />
          </ContainerOwner>

          <ContainerFollows>
            {follows &&
              follows.map((follow) => (
                <Profile
                  key={follow.id}
                  direction="column"
                  usidebar
                  username={follow.username}
                  img={follow.avatar}
                  name={follow.name}
                />
              ))}
            {loading && <p>loading</p>}
          </ContainerFollows>
        </Aside>

        <ContainerFeeds>
          {feeds.length > 0 && feeds.map((feed) => <FeedCard key={feed.photo.id} feed={feed} />)}
        </ContainerFeeds>
      </Container>
    </Layout>
  );
};

export default Main;
