import React, { useState } from 'react';

const calcInitialState = () => {
  //console.log('calcInitialState');
  return 10
}

function Counter() {

  const [count, setCount] = useState(() => calcInitialState())
  const [state, setState] = useState({
    title: 'state obj',
    date: new Date()
  })

  const setPrevPlas2 = () => {
    //setCount(count + 1)
    //setCount(count + 1)
    setCount(prev => prev + 2)
  }

  const updateTitle = () => {
    setState(prev => {
      return {
        ...prev,
        title: 'new title'
      }
    })
  }

  return (
    <div>
      <h1 className="main-title">useState</h1>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+1</button>
      <button className="btn" onClick={setPrevPlas2}>prev+2</button>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>-1</button>
      <button className="btn btn-success" onClick={updateTitle}>update title</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default Counter;
