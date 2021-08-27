import React, { useEffect, useRef, useState } from 'react';

export default function Ref() {

  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef()
  const prevValue = useRef()

  useEffect(() => {
    renderCount.current++
    //console.log(inputRef.current.value);
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div>

      <h1 className="main-title">useRef</h1>
      <h3>render count: {renderCount.current}</h3>
      <input type='text' ref={inputRef} value={value} onChange={e => setValue(e.target.value)}></input>
      <button className='btn-success' onClick={() => inputRef.current.focus()}>focus</button>
      <pre>prevValue: {prevValue.current}</pre>

    </div>
  );
}
