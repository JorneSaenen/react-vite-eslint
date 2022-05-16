import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// Pages import
import Home from './pages/Home';
import Page2 from './pages/Page2';

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/page2' element={<Page2 />} />
    </Routes>
  </BrowserRouter>
);
