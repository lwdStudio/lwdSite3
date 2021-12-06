import React, {useState,useEffect} from 'react'
import { useMediaQuery } from "react-responsive";

export const SitePreferenceToggle = () => {
    return (
        <div className="flex justify-center align-middle">
            <DarkToggle />
        </div>
    )

}

export const DarkToggle = () => {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
            setIsDark(prefersDark);
        }
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);
    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
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
            <label htmlFor='darkModeToggle'></label>
        </div>
    )
}
