import React from 'react';
import Banner from '../banner/banner';
import IPAddress from '../IPAddress'; // Import the new component

const Exhibit = ({ children, ipvVersion }) => {
  return (
    <div className="exhibit">
      <h2 className="exhibit-title">
        <Banner />
      </h2>
      <div className="exhibit-content">
        {children}
        <IPAddress ipvVersion={ipvVersion} />
      </div>
    </div>
  );
};

export default Exhibit;
