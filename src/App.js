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
import CollapseButton from './component/CollapseButton';
import CollapseBody from './component/CollapseBody';
import { IdContext } from './context/IdContext';
import CollapseSet from './component/CollapseSet';

function App() {
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
          {/* <Collapse
            id="leftNav"
            text="네이게이션"
            Content={<Nav id={'leftNav'} />}
          />
          <Collapse
            id="itemsNav"
            text="아이템"
            Content={<Nav id="itemsNav" />}
          /> */}
        </div>
        <div className="middle-center" id="Content">
          {/* <BrowserRouter>
            <Routes>
              <Route path="/" />
              <Route path="/collapse" element={<Collapse />} />
              <Route path="/carousel" element={<Carousel />} />
              <Route path="/dropdowns" element={<Dropdown />} />
              <Route path="/card" element={<CardInGame 
              name="asset0" imagePath="/img/card/asset0.svg"/>} />              
              <Route path="/board" element={<BoardInGame num="2" jsonPath="/cardData.json" />} />
              <Route path="/isout" element={<IsOutsideInfoComeLater/>}/>
              <Route path='/fetchtest' element={<FetchTest/>}/>
            </Routes>
          </BrowserRouter> */}
        </div>
        <div className="middle-right"></div>
      </div>

      {/* 상중하 중에 아래부분 가로로 긴 직사각형 */}
      <div className="footer"></div>
    </>
  );
}

export default App;
