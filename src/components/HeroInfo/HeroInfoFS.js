import React from 'react';

import style from './HeroInfo.module.css'

export const HeroInfoFS = (props) => {
    return <div className={style.fullscreen}>
        <img
            className={style.heroImg}
            src={props.avatar}
            alt="slika"
            onClick={props.showFullImage}
        />
    </div>
}