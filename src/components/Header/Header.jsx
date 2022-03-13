import React from 'react';
import useTheme from "../UseTheme/useTheme";
import ThemeDark from "./HeaderTheme/ThemeDark";
import LightTheme from "./HeaderTheme/ThemeLight";


const Header = () => {
    const {theme, setTheme} = useTheme()

    const setDark = () => setTheme('light')
    const setLight = () => setTheme('dark')

    return (
        <>
            {theme === 'dark'
                ? <ThemeDark setDark={setDark}/>
                : <LightTheme setLight={setLight}/>}
        </>

    );
};

export default Header;