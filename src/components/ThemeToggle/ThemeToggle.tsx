import { useState } from 'react'
import './index.css'
import Moon from '../Icons/Moon';
import Sun from '../Icons/Sun';


interface Theme {
    value?: string
}

function ThemeToggle() {



    const storageKey = 'theme-preference';

    const getColorPreference = () => {
        if (localStorage.getItem(storageKey))
            return localStorage.getItem(storageKey)
        else
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }

    const setPreference = (theme: string) => {
        localStorage.setItem(storageKey, theme)
    }





    const changeColor = (onlyApply?: boolean) => {

       
         

        let theme = getColorPreference();

        if(!onlyApply)
            theme = (theme == 'light' ? 'dark' : 'light')

        const root = document.documentElement;

        let white = getComputedStyle(root).getPropertyValue("--custom-white");
        let whiteSecondary = getComputedStyle(root).getPropertyValue("--custom-white-secondary");
        let black = getComputedStyle(root).getPropertyValue("--custom-black");
        let blackSecondary = getComputedStyle(root).getPropertyValue("--custom-black-secondary");

        document.documentElement.style.setProperty("--current-bg-color", (theme == 'light' ? white : black));
        document.documentElement.style.setProperty("--current-color", (theme == 'light' ? black : white));
        document.documentElement.style.setProperty("--current-bg-color-secondary", (theme == 'light' ? whiteSecondary : blackSecondary));

        document.getElementById("toogle-theme")?.setAttribute("data-theme", (theme == 'light' ? "light" : "dark"));


        setPreference(theme == 'light' ? "light" : "dark");
    }


    changeColor(true);

    return (
        <button id="toogle-theme" data-theme={getColorPreference()} onClick={() => changeColor()} className=' p-1 flex   theme-switch
         rounded-full items-center justify-between cursor-pointer relative'>
            <span></span>

            <Sun className='svg-icon sun mr-[5px]'></Sun>

            {/* MOON */}

            <Moon className="svg-icon moon ml-[5px]"></Moon>



        </button >
    )
}


export default ThemeToggle;