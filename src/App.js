import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Collapse from './component/Collapse';
import Nav from './component/Nav';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collapse" element={<Collapse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
