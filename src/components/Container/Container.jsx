import React from 'react';
import style from './Container.module.scss'

export const Container = ({children})=> {
    return (
        <div className={style._container}>
            {children}
        </div>
    );
};
