import React, { useState } from 'react';
import Counter from './examples/counter';
import Effect from './examples/effect';
import Memo from './examples/memo';
import Ref from './examples/ref';

import './index.css'

function App() {

  const [colored, setColored] = useState(false)

  const slyles = {color: colored ? 'red' : 'black'}

  return (
    <div className="App" style={{ paddingTop: '25px', paddingLeft: '100px' }}>

      {/*<h1 className="main-title">useMemo</h1>
      <h3 style={slyles}>number: {number}</h3>
      <h3 style={slyles}>computed value: {computed}</h3>
      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>+1</button>
      <button className="btn btn-danger" onClick={() => setNumber(number - 1)}>-1</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>change color</button>*/}

      <Counter/>
      <Effect/>
      <Ref/>
      <Memo/>

    </div>
  );
}

export default App;
