import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Collapse from './component/Collapse';

function App() {
  return (
    <>
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
