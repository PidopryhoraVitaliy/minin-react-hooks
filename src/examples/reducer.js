import React from 'react';
import Alert from './alertReducer/AlertMsgReducer';
import AlertBtn from './alertReducer/AlertBtnReducer';
import AlertProvider from './alertReducer/AlertReducer';

export default function Reducer() {

  return (
    <div>
      <AlertProvider>
        <h1 className="main-title">useReducer</h1>
        <Alert />
        <AlertBtn />
      </AlertProvider>
      <pre></pre>
    </div>
  )

}

