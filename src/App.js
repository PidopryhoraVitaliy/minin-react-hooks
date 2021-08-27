import React from 'react';
import Counter from './examples/counter';
import Effect from './examples/effect';

import './index.css'

function App() {

  return (
    <div className="App" style={{ paddingTop: '25px', paddingLeft: '100px' }}>

      <h1 className="main-title">use</h1>

      <Counter></Counter>
      <Effect></Effect>

    </div>
  );
}

export default App;
