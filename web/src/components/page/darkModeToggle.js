import React, {useState,useEffect} from 'react'
import { ClientOnly } from '../utility'
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

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
            <a  href='#after-switch-theme' 
                role='button' className='text-gray-600 dark:text-gray-300 p-1.5 rounded-full hover:bg-opacity-50 font-light hidden-text-companion' 
                aria-label={`Switch to ${isDark?`Light`:`Dark`} Mode`} 
                onClick={isDark ? () => setIsDark(false) : () => setIsDark(true)}>{isDark ? <FontAwesomeIcon icon={faMoon} className='scale-150' /> : <FontAwesomeIcon icon={faSun} className='scale-150'/>} <span className='hidden-text pl-1'>Switch to {isDark?`Light`:`Dark`} Mode</span></a>
        </div>
    )
}