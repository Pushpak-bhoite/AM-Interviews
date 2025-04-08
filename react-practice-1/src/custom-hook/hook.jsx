import React, { useEffect, useState } from 'react'

export default function useCustomHook() {
    const [theme, _setTheme] = useState('hello');
   

    useEffect(() => {
        let current = localStorage.getItem();
        if (current) {
            try {
                const parsedTheme = JSON.parse(current);
                _setTheme(parsedTheme.theme); // Assuming 'theme' is the key in your stored object
            } catch (error) {
                console.error('Error parsing theme from localStorage:', error);
            }
        }
    }, []);

    function setTheme(newTheme) {
        localStorage.setItem('myTheme', JSON.stringify({ 'theme': newTheme }))
        _setTheme(newTheme)
    }
    return [theme, setTheme]
}







