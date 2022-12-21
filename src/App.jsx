import { useRef, useState } from 'react';
import { Tweet } from './Tweet';
import { TweetForm } from './TweetForm';
import { TweetList } from './TweetList';

const DEFAULT_TWEETS = [
  {
    id: 0,
    name: 'Romain',
    content: 'toto',
    like: 10,
  },
  {
    id: 1,
    name: 'Didier',
    content: 'xx',
    like: 100,
  },
  {
    id: 2,
    name: 'toto',
    content: 'ddd',
    like: 5,
  },
];

const useTweets = () => {
  const [tweets, setTweets] = useState(DEFAULT_TWEETS);
  //const nameRef = useRef();

  const onDelete = (id) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== id));
  };

  const onLike = (id) => {
    setTweets((curr) => {
      const copyTweet = [...curr];

      const likedTweet = copyTweet.find((tweet) => tweet.id === id);
      likedTweet.like += 1;
      return copyTweet;
    });
  };

  const addTweet = (tweet) => {
    setTweets((curr) => {
      const newTweet = {
        id: curr[curr.length - 1]?.id + 1 ?? 0,
        name: tweet.name,
        content: tweet.content,
        like: 0,
      };
      return [...tweets, newTweet];
    });
  };

  return { onLike, onDelete, addTweet, tweets };
};

export default function App() {
  const { onLike, onDelete, addTweet, tweets } = useTweets();

  return (
    <div className="tweet-container">
      <TweetForm onSubmit={addTweet} />
      <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
    </div>
  );
}
