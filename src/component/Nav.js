import { useState } from 'react';
import NavOpenedContent from './NavOpenedContent';
import NavClosedContent from './NavClosedContent';

const Nav = () => {
  const [nav_expanded, setNav_Expended] = useState(true);

  const changedNavStatus = () => {
    setNav_Expended(!nav_expanded);
  };

  return (
    <div id="Nav" onClick={changedNavStatus}>
      {nav_expanded ? <NavOpenedContent /> : <NavClosedContent />}
    </div>
  );
};

export default Nav;
