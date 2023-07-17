import React from 'react';
import Exhibit from './components/exhibit/exhibit';

function App() {
  return (
    <div className="App">
      <Exhibit ipvVersion="v4" />
      <Exhibit ipvVersion="v6" />
    </div>
  );
}

export default App;
