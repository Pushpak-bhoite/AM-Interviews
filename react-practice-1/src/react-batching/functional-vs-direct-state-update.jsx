import React from 'react';

import { useState } from "react";

export function App(props) {
    const [count, setCount] = useState(0);

    /*direct state update*/ 
    // const handleClick = () => {
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    // };

    /*functional state update*/ 
    const handleClick2 = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    };

    console.log('cnt', count)//1
    console.log('cnt', count)//3
    return (
        <div className='App'>
            <button onClick={handleClick}>Count: {count}</button>;
            <button onClick={handleClick2}>Count: {count}</button>;
        </div>
    );
}
