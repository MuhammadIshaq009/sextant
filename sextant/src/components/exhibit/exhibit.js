import React from 'react';
import Banner from '../banner/banner';

const Exhibit = ({children}) => {
  return (
    <div className="exhibit">
      <h2 className="exhibit-title"><Banner/></h2>
      <div className="exhibit-content">{children}</div>
    </div>
  );
};

export default Exhibit;
