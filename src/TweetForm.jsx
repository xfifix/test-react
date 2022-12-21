export function TweetForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {
      name: name,
      content: content,
      like: 0,
    };

    onSubmit(newTweet);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>new form</h4>
        <input type="text" name="name" />
        <input type="texte" name="content" />
        <button type="submit">add</button>
      </form>
    </>
  );
}
