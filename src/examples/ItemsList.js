import React, { useEffect, useState } from 'react';

export default function ItemsList({ getItems }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        //console.log('ItemsList getItems');
        setItems(getItems(10))
    }, [getItems])

    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    )

}