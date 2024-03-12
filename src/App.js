import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import Collapse from './component/Collapse';
import Carousel from './component/Carousel';
import Dropdown from './component/Dropdown';
import Navbar from './component/Navbar';
import './css/mytemplate.css';
import CardInGame from './component/CardInGame';
import BoardInGame from './component/BoardInGame';
import IsOutsideInfoComeLater from './component/IsOutsideInfoComeLater';
import FetchTest from './component/FetchTest';
import { IdContext } from './context/IdContext';
import CollapseSet from './component/CollapseSet';
import NotFound from './component/NotFound';
import { useEffect } from 'react';

function App() {
  const public_url = process.env.PUBLIC_URL;

  console.log(process.env.PUBLIC_URL);
  return (
    <>
      {/* 12시방향 가로로 긴 직사각형 */}
      <div className="header">
        <Navbar id={'topNavbar'} />
      </div>

      {/* 상중하중에 중간에 뚱뚱한 가로로 긴 직사각형 */}
      <div className="middle">
        <div className="middle-left">
          <IdContext.Provider value="leftNavCollapseBody">
            <CollapseSet />
          </IdContext.Provider>
        </div>
        <div className="middle-center" id="Content">
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/collapse" element={<Collapse />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/dropdowns" element={<Dropdown />} />
            <Route
              path="/card"
              element={
                <CardInGame name="asset0" imagePath="/img/card/asset0.svg" />
              }
            />
            <Route
              path="/board"
              element={<BoardInGame jsonPath="/cardData.json" />}
            />
            <Route path="/isout" element={<IsOutsideInfoComeLater />} />
            <Route path="/fetchtest" element={<FetchTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="middle-right"></div>
      </div>

      {/* 상중하 중에 아래부분 가로로 긴 직사각형 */}
      <div className="footer"></div>
    </>
  );
}

export default App;
