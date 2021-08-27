import React from 'react';
import Counter from './examples/counter';
import Effect from './examples/effect';
import Ref from './examples/ref';

import './index.css'

function App() {

  return (
    <div className="App" style={{ paddingTop: '25px', paddingLeft: '100px' }}>

      <Counter/>
      <Effect/>
      <Ref/>

    </div>
  );
}

export default App;
