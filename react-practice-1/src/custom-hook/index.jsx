import React from 'react'
import useCustomHook from './hook'

const ShowTheme = () => {
    const [theme, setTheme] = useCustomHook()
    return (
        <div>
            {theme?.theme}
            <button onClick={()=> setTheme('dark')}>setDark</button>
            <button onClick={()=> setTheme('light')}>light</button>
        </div>
    )
}

export default ShowTheme
