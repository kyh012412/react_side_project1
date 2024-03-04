import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Collapse from './component/Collapse';
import Carousel from './component/Carousel';
import Dropdown from './component/Dropdown';
import Navbar from './component/Navbar';
import './css/mytemplate.css'

function App() {
  return (
    <>
      {/* 12시방향 가로로 긴 직사각형 */}
      <div className='header'>
        <Navbar id={"topNavbar"}/>
      </div>

      {/* 상중하중에 중간에 뚱뚱한 가로로 긴 직사각형 */}
      <div className='middle'>
        <div className='middle-left'>
          <Nav id={"leftNav"}/>
        </div>
        <div className='middle-center' id="Content">
          <BrowserRouter>
            <Routes>
              <Route path="/" />
              <Route path="/collapse" element={<Collapse />} />
              <Route path="/carousel" element={<Carousel />} />
              <Route path="/dropdowns" element={<Dropdown />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className='middle-right'></div>        
      </div>

      {/* 상중하 중에 아래부분 가로로 긴 직사각형 */}
      <div className='footer'>
      </div>
    </>
  );
}

export default App;
