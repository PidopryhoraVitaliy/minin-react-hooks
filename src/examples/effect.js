import React, { useEffect, useState } from 'react';

function Effect() {

  const [type, setType] = useState('users')
  const [data, setData] = useState()
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  //console.log('component render');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount');
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>

      <h1 className="main-title">useEffect</h1>
      <h3>Type: {type}</h3>
      <button className="btn btn-primary" onClick={() => setType('users')}>users</button>
      <button className="btn btn-primary" onClick={() => setType('todos')}>todos</button>
      <button className="btn btn-primary" onClick={() => setType('posts')}>posts</button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>

    </div>
  );
}

export default Effect;
