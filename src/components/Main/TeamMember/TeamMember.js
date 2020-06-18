import React from 'react';

export const TeamMember = (props) => {
    return (
        <li key={props.id}>
            <img src={props.url} alt='Oops...'></img>
            <p>{props.name}</p>
        </li>
    )
}