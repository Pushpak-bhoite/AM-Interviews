import React, { useEffect, useState } from 'react' 

function useCustomHook(){
    const  [theme, setTheme] = useState()
    useEffect(()=>{
        localStorage.setItem('theme',)
    },[])
    return [theme , setTheme]
}