import React from 'react';
import { useAlert } from './AlertReducer';

export default function AlertBtn() {

    const { show } = useAlert()

    return (
        <>
            <h2>Context example</h2>
            <button
                className="btn btn-primary"
                onClick={() => show('this text from AlertBtn')}>
                Show alert message
            </button>
        </>
    );
}