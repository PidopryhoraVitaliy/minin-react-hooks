import React from 'react';
import Callback from './examples/callback';
import Context from './examples/context';
import Counter from './examples/counter';
import Effect from './examples/effect';
import Memo from './examples/memo';
import Ref from './examples/ref';

import './index.css'

function App() {

  return (
    <div className="App" style={{ paddingTop: '25px', paddingLeft: '100px' }}>

      <Callback/>
      <Context/>
      <Counter/>
      <Effect/>
      <Ref/>
      <Memo/>
      

    </div>
  );
}

export default App;
