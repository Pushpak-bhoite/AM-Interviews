import React, { useState, useEffect } from 'react';

export default function App() {
    const [cnt, setCnt] = useState(new Date());
    useEffect(() => {
        const cl = setInterval(() => {
            setCnt(new Date())
        }, 1000)
        return () => clearInterval(cl)
    }, [cnt]);
    return (
        <div>
            {cnt.toLocaleString()}
        </div>
    );
}



