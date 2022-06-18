import {useState} from 'react';

function Home() {
  return (
    <div>
      <h1>Home 3</h1>
      <p>This is the home page</p>
      <Contador />
    </div>
  );
}

function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Home;