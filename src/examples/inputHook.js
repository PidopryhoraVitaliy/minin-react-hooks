import React, { useEffect, useState } from 'react';

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ' + value);
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    setValue(event.target.value)
  }
  const clear = () => setValue('')
  return {
    bind: { value, onChange },
    value,
    clear
  }
}

export default function InputHook() {

  const input = useInput('')

  useLogger(input.value)

  return (
    <div>

      <h1 className="main-title">My InputHook</h1>
      <input type='text' {...input.bind}></input>
      <button className='btn btn-warning' onClick={() => input.clear()}>Clear</button>
      <h3>input text: {input.value}</h3>
      

    </div>
  );
}
