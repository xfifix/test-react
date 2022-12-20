import { useState } from 'react';
import { SayHello } from './SayHello';
import { Tweet } from './Tweet';

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

export default function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEETS);

  const onDelete = (id) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== id));
  };

  return (
    <div className="tweet-container">
      {tweets.map(({ id, name, content, like }) => {
        return (
          <Tweet
            key={id}
            id={id}
            name={name}
            content={content}
            like={like}
            onDelete={(id) => {
              console.log(id);
              onDelete(id);
            }}
          />
        );
      })}
    </div>
  );
}
