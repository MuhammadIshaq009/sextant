import React, { useEffect, useState } from 'react';
import WebSocketClient from 'websocket';

const LatencyDisplay = () => {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    // Create a new WebSocket connection to Pylon
    const ws = new WebSocketClient.w3cwebsocket('ws://localhost:55455');

    // Function to calculate and set the latency
    const calculateLatency = (timestamp) => {
      const currentTime = Date.now();
      const packetTimestamp = parseInt(timestamp, 10); // Parse timestamp to integer
      const packetLatency = currentTime - packetTimestamp;
      setLatency(packetLatency);
    };

    ws.onopen = () => {
      console.log('WebSocket connected to Pylon.');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.timestamp) {
        calculateLatency(data.timestamp);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected.');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="latency-display">
      <h3>Packet Latency</h3>
      <p>{`${latency} ms`}</p>
    </div>
  );
};

export default LatencyDisplay;
