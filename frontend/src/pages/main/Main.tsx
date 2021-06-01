import { bindActionCreators } from 'redux';
import Layout from '../../components/wrapper';
import { Aside, ContainerOwner, ContainerFollows, ContainerFeeds, Container } from './styles';
import { Profile } from '../../components/profile';
import { State } from '../../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import FeedCard from '../../components/FeedCard';
import * as feedsActions from '../../redux/feed/feedActions';
import { useEffect } from 'react';

const Main: React.FC = () => {
  interface IFollow {
    id: number;
    username: string;
    avatar: string;
    name: string;
  }

  const follows: IFollow[] = [];
  const dispatch = useDispatch();
  const { getFeeds } = bindActionCreators(feedsActions, dispatch);
  const { user } = useSelector((state: State) => state.user);
  const { feed, loading } = useSelector((state: State) => state.feeds);

  useEffect(() => {
    getFeeds();
  }, [dispatch]);

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
          {feed.length > 0 && feed.map((feed: any) => <FeedCard key={feed.photo.id} feed={feed} />)}
        </ContainerFeeds>
      </Container>
    </Layout>
  );
};

export default Main;
