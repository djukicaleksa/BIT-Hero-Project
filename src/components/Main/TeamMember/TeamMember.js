import React from 'react';

import style from './TeamMember.module.css'

export const TeamMember = (props) => {
    return (
        <li className={style.wrapper}>
            <img src={props.url} alt='Oops...' className={style.member} ></img>
            <img src="https://cdn.iconscout.com/icon/free/png-512/delete-737-475058.png" alt="delete" className={style.deleteIcon} onClick={() => { props.removeMember(props.id, props.key) }} />
            <p>{props.name}</p>
        </li>
    )
}