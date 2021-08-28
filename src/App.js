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
    <div className="conteiner ps-5 pt-2">
      <Context />
      <Counter />
      <Effect />
      <Ref />
      <Memo />
      <Callback />
    </div>
  )
  
}

export default App;
