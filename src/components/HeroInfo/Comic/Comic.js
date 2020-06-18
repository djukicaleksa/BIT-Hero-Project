import React from 'react';

export const Comic = (props) => {
    return (
        <li>
            <img src={props.url} alt='Oopps' className='comicImg'></img>
            <p className="comicName">{props.name}</p>
        </li>
    )
}