import React from 'react';
import { useAlert } from './AlertContext';

export default function AlertBtn() {

    const {toggle} = useAlert()

    return (
        <>
            <h2>Context example</h2>
            <button className="btn btn-primary" onClick={toggle}>Show alert message</button>
        </>
    );
}