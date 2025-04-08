import React, { useEffect, useState } from 'react';

export default function useCustomHook() {
    const [theme, _setTheme] = useState(() => {
        return JSON.parse(localStorage.getItem('myTheme'))
    });

    // useEffect(() => {
    // let current = localStorage.getItem('myTheme');
    // if (current) {
    //     try {
    //         const parsedTheme = JSON.parse(current);
    //         _setTheme(parsedTheme.theme); // Assuming 'theme' is the key in your stored object
    //     } catch (error) {
    //         console.error('Error parsing theme from localStorage:', error);
    //     }
    // }
    // }, []);

    function setTheme(newTheme) {
        localStorage.setItem('myTheme', JSON.stringify({ 'theme': newTheme }))
        _setTheme(prev => ({ theme: newTheme }))
    }
    return [theme, setTheme]
}







