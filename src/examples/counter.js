import React, { useState } from 'react';

const calcInitialState = () => {
  console.log('calcInitialState');
  return 10
}

function Counter() {

  const [count, setCount] = useState(() => calcInitialState())
  const [state, setState] = useState({
    title: 'state obj',
    date: new Date()
  })

  const setPrevPlas2 = () => {
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
    <div className="App" style={{padding: '25px'}}>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count+1)}>+1</button>
      <button className="btn btn-success" onClick={setPrevPlas2}>prev+2</button>
      <button className="btn btn-danger" onClick={() => setCount(count-1)}>-1</button>
      <button className="btn" onClick={updateTitle}>update title</button>
      
      
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default Counter;
