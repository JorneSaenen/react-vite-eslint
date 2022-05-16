import '../App.css';
import { useState } from 'react';
import logo from '../images/logo.svg';
import Title from '../components/Title';
import Image from '../images/vitejs.jpg?w=600&webp';
import { Link } from 'react-router-dom';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='logos'>
        <img src={logo} alt='logo' className='App-logo' />
        <img src={Image} alt='testing imagetools' className='App-logo' />
      </div>

      <Title text={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div className='links'>
        <Link to={'/'}>Home</Link>
        <Link to={'/page2'}>Page 2</Link>
      </div>
    </div>
  );
};

export default Home;
