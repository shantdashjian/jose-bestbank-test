import React from 'react'

export default function HeaderIcon({children}){

    return (
        <img className="header-icon" src={children} alt="company logo image" />
    )
}