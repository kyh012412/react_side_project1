import React, { memo, useContext } from 'react';
import { IdContext } from '../context/IdContext';

const CollapseBody = ({ Content = 'content 누락' }) => {
  const id = useContext(IdContext);
  return (
    <>
      <div style={{ Height: '120px' }}>
        <div className="collapse collapse-horizontal" id={id}>
          <div className="card card-body" style={{ width: '300px' }}>
            {Content}
          </div>
        </div>
      </div>
    </>
  );
};

export default CollapseBody;
