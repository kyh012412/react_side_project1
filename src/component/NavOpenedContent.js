import Home from './Home';

const NavOpenedContent = ({ inner = <Home /> }) => {
  return (
    <>
      <h1>영역 전개</h1>
      {inner}
    </>
  );
};

export default NavOpenedContent;
