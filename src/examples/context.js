import React from 'react';
import Alert from './alert/AlertMsg';
import AlertBtn from './alert/AlertBtn';
import AlertProvider from './alert/AlertContext';

export default function Context() {

  return (
    <div>
      <AlertProvider>
        <h1 className="main-title">useContext</h1>
        <Alert />
        <AlertBtn />
      </AlertProvider>
      <pre></pre>
    </div>
  )

}

