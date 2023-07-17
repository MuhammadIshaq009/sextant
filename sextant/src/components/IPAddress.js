import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IPAPI_BASE_URL = 'https://api64.ipify.org?format=json';

const IPAddress = ({ ipvVersion }) => {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      const url = ipvVersion === 'v4' ? IPAPI_BASE_URL : `${IPAPI_BASE_URL}&ipv6=true`;

      try {
        const response = await axios.get(url);
        setIPAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIPAddress();
  }, [ipvVersion]);

  return (
    <div className="ip-address">
      <h3>{ipvVersion === 'v4' ? 'IPv4 Address' : 'IPv6 Address'}</h3>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPAddress;
