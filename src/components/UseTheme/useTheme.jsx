import React, {useEffect, useState} from 'react';

const UseTheme = () => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])
    return {theme, setTheme};
};

export default UseTheme;