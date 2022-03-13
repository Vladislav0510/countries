import React from 'react';
import style from './../Header.module.scss'
import {Container} from "../../Container/Container";

import cn from 'classnames'
import Moon from "./../Moon/Moon";

const ThemeDark = (props) => {
    const headerModeStyle = cn(style.header__mode, style.mode)
    return (
        <div className={style.header__dark}>
            <Container>
                <div className={style.header__container}>
                    <h1 className={cn(style.header__title, style.title__dark)}>
                        Where in the world?
                    </h1>
                    <div className={headerModeStyle}>
                        <div className={style.header__mode} onClick={props.setDark}>
                            <Moon/>
                            <button className={cn(style.mode__button, style.btn__dark)}>
                                Dark mode
                            </button>
                        </div>

                    </div>
                </div>
            </Container>
        </div>

    )
}

export default ThemeDark;