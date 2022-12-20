export function Tweet({ name, content, like }) {
  const onLike = () => {
    alert({ name });
  };
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{content}</p>
      <button onClick={() => onLike()}>{like}</button>
    </div>
  );
}
