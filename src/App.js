import React from 'react';
import Callback from './examples/callback';
import Context from './examples/context';
import Effect from './examples/effect';
import Memo from './examples/memo';
import Reducer from './examples/reducer';
import Ref from './examples/ref';
import Counter from './examples/counter';

import './index.css'

function App() {

  return (
    <div className="conteiner ps-5 pt-2">
      <Reducer />
      <Context />
      <Callback />
      <Memo />
      <Ref />
      <Effect />
      <Counter />
    </div>
  )
  
}

export default App;
