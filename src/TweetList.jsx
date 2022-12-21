import { Tweet } from './Tweet';

export function TweetList({ tweets, onDelete, onLike }) {
  return (
    <>
      {tweets.map(({ id, name, content, like }) => {
        return (
          <Tweet
            key={id}
            id={id}
            name={name}
            content={content}
            like={like}
            onDelete={onDelete}
            onLike={onLike}
          />
        );
      })}
    </>
  );
}
