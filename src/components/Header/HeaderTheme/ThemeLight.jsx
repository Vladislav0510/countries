import React from 'react'
import style from './../Header.module.scss'
import {Container} from "../../Container/Container";
import {IoMoon} from 'react-icons/io5'
import cn from 'classnames'

const LightTheme = (props) => {
    const headerModeStyle = cn(style.header__mode, style.mode)
    return <div className={style.header__light}>
                    <Container>
                        <div className={style.header__container}>
                            <h1 className={style.header__title}>
                                Where in the world?
                            </h1>
                            <div className={headerModeStyle}>
                                <div className={style.header__mode} onClick={props.setLight}>
                                    <IoMoon/>

                                    <button className={style.mode__button}
                                    >
                                        Light mode
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
}
export default LightTheme