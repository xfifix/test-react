import { useState } from 'react';
import { SayHello } from './SayHello';
import { Tweet } from './Tweet';

export default function App() {
  const [tweets, setTweets] = useState();
  const [username, setUsername] = useState('romain');

  const addLetter = () => {
    setUsername(username + 'a');
  };

  return (
    <div className="tweet-container">
      <p>{username}</p>
      <button onClick={addLetter}>add letter</button>
      <Tweet name="Romain" content="toto" like="10" />
      <Tweet name="toto" content="toto" like="10" />
      <Tweet name="titi" content="toto" like="10" />
      <Tweet name="Lena" content="toto" like="10" />
    </div>
  );
}
