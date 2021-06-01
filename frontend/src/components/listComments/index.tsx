/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from 'react-router-dom';
//@ts-ignore
import englishString from 'react-timeago/lib/language-strings/en';
//@ts-ignore
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import TimeAgo from 'react-timeago';
import { Comment, Container, StylesTimeAgo } from './styles';

interface CommentListProps {
  comments: IComment[];
}

interface IComment {
  id: number;
  body: string;
  createdAt: string;
  user: any;
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const formatter = buildFormatter(englishString);

  return (
    <Container>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment.id}>
            <div>
              <Link to={`/profile/${comment.user.username}`}>{comment.user.username}</Link>
              <span>{comment.body}</span>
            </div>

            <StylesTimeAgo>
              <TimeAgo date={`${comment.createdAt}Z`} formatter={formatter} />
            </StylesTimeAgo>
          </Comment>
        ))}
    </Container>
  );
};
