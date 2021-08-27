import React, { useMemo, useState } from 'react';

const complexCompute = (num) => {
  //console.log('complexCompute');
  let i = 0
  while (i < 1000000000) i++
  return num*2
}

export default function Memo() {

  const [number, setNumber] = useState(10)
  const [colored, setColored] = useState(false)

  /*const slyles = useMemo(() => ({
    color: colored ? 'red' : 'black'
  }), [colored])*/
  const slyles = {color: colored ? 'red' : 'black'}

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  /*useEffect(() => {
    console.log('Styles changed');
  }, [styles])*/

  return (
    <div>

      <h1 className="main-title">useMemo</h1>
      <h3 style={slyles}>number: {number}</h3>
      <h3 style={slyles}>computed value: {computed}</h3>
      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>+1</button>
      <button className="btn btn-danger" onClick={() => setNumber(number - 1)}>-1</button>
      <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>change color</button>

    </div>
  );
}
