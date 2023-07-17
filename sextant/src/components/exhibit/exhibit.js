import React from 'react';
import Banner from '../banner/banner';
import IPAddress from '../IPAddress';
import LatencyDisplay from '../LatencyDisplay'; // Import the new component

const Exhibit = ({ children, ipvVersion }) => {
  return (
    <div className="exhibit">
      <h2 className="exhibit-title">
        <Banner />
      </h2>
      <div className="exhibit-content">
        {children}
        <IPAddress ipvVersion={ipvVersion} />
        <LatencyDisplay /> {/* Display packet latency */}
      </div>
    </div>
  );
};

export default Exhibit;
