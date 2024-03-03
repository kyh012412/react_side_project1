import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Collapse from './component/Collapse';
import Carousel from './component/Carousel';

function App() {
  return (
    <>
      <Nav />
      <div id="Content">
        <BrowserRouter>
          <Routes>
            <Route path="/" />
            <Route path="/collapse" element={<Collapse />} />
            <Route path="/carousel" element={<Carousel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
