import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <img src={logo} alt='logo' />
      <Title text={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
