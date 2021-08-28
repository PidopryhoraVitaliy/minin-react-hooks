import React, { useCallback, useState } from 'react';
import ItemsList from './ItemsList';

export default function Callback() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const slyles = {color: colored ? 'red' : 'black'}

  const generateItemsFromAPI = useCallback (indexNum => {
    return new Array(count).fill('').map((_, i) => `element ${i+indexNum}`)
  }, [count])

  return (
    <div>

      <h1 className="main-title">useCallback</h1>
      <h3 style={slyles}>count: {count}</h3>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+1</button>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>-1</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>change color</button>

      <ItemsList getItems={generateItemsFromAPI}></ItemsList>

    </div>
  );
}

