import '../App.css';
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div className='App'>
      <h1>Page 2</h1>
      <div className='links'>
        <Link to={'/'}>Home</Link>
        <Link to={'/page2'}>Page 2</Link>
      </div>
    </div>
  );
};

export default Page2;
