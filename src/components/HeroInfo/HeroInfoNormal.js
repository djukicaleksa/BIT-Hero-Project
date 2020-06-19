import React from 'react'

import style from './HeroInfo.module.css'
export const HeroInfoNormal = (props) => {
    return <div>
        <div className={style.infoPage}>
            <div className={style.imgContainer}>
                <img className={style.heroImg}
                    src={props.avatar}
                    alt="slika"
                    onClick={props.showFullImage}
                />
            </div>
        </div>
        <div className={style.dataContainer}>
            <h2>{props.name}</h2>
            <ul>

                <li>Appeared at {props.appears} comic issues</li>
                <li>Last modified {props.modified}</li>
                <a href={props.lastModified}>
                    <li>Find char details here</li>
                </a>
                <a href={props.details}>
                    <li>List of comics</li>
                </a>
            </ul>
        </div>
    </div>
}