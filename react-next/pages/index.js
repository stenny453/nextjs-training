import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default Pampers !'}</h1>;
}

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between"
  }
}

export default function HomePage() {
  const names = ['A Class', 'KKI', 'Pampers'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div style={styles.root}>
      <Header title="FullStack Developer" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Run 👀 {likes}</button>
    </div>
  );
}