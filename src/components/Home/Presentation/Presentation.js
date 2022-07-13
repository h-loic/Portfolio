import React from 'react'
import './presentation.scss'

export default function Presentation(props) {

    return (
        <div id="skills-part" className='container'>
            <div className='part-content row'>
                <div className='col-1'/>
                <div className='margin-header2 h1 col-10'>
                    <p>{props.dictionary.hi}</p>
                    <p>{props.dictionary.presentation1}</p> 
                    <p>{props.dictionary.presentation2}</p>
                </div>
                <div className='col-1'/>
            </div>
        </div>
    )
}