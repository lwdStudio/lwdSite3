import React, {useState,useEffect} from 'react'
import { ClientOnly } from '../utility'
import { useMediaQuery } from "react-responsive";

export const RenderDarkToggle = () => {
    return(
        <ClientOnly><DarkToggle /></ClientOnly>
    )
}

const DarkToggle = () => {
    const userPrefersDark = localStorage.getItem("userPrefersDark")
    const systemPrefersDark = useMediaQuery({query: "(prefers-color-scheme: dark)"});
    const [isDark, setIsDark] = useState(() => {
        if(userPrefersDark !== null){
            return JSON.parse(userPrefersDark)
        }
        else {
            return JSON.parse(systemPrefersDark)
        }
    });

    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add("dark")
            localStorage.setItem("userPrefersDark", JSON.stringify(isDark))
        }
        else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("userPrefersDark", JSON.stringify(isDark))
        }
    }, [isDark]);
    return (
        <div className="flex justify-center align-middle">
            <input 
                type='checkbox' 
                name='darkModeToggle' 
                id='darkModeToggle'
                checked={isDark} 
                onChange={event=>setIsDark(event.target.checked)}
            />
            <label htmlFor='darkModeToggle' title={`Switch to ${isDark?`Light`:`Dark`} Mode`}></label>
        </div>
    )
}
