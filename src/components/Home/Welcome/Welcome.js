import React from 'react'
import './welcome.scss'
import Typical from 'react-typical'
import {IoMdCodeDownload} from 'react-icons/io'

export default function Welcome(props) {

    return (
        <div id="welcome-part" className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 justify-content-center col-md-5 row'>
                    <div className='col-md-2'></div>
                    <div className='title col-md-9 col-10 mr-0'>
                        <span className='name h1 pb-3 mb-3'>            
                            LOIC HUG
                        </span><br/>
                        <span className='h2'>
                            <Typical
                                steps={['Software Engineer', 2000, 'Software Engineer soon']}
                                loop={1}
                                wrapper="p"
                                className='mt-5'
                            />
                        </span>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='floating-words col-md-12 col-10 mr-0 ml-0 center'>
                        <img className="rounded-circle h-75 picture align-middle" alt="myself" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLPb-S9685XGc7ZrJ-dYgeecoptb2tZ91ow&usqp=CAU"
                            data-holder-rendered="true"/>
                    </div>
                </div>
                <div className='col-12 col-md-7'>
                    {!props.isSmallScreen ?

                        <div className='row welcome-presentation h3'>
                            <div className='col-2'></div>
                            <div className='col-8'>
                                <p>Hi,</p>
                                <p>I am currently in my last year of engineering school, specializing in computer science.</p> 
                                <p>I'm looking for a 6 month internship starting in February 2022 that could lead to a hiring</p>
                            </div>
                            <div className='col-2'></div>
                        </div>
                        :
                        null    
                    }
                </div>
                <div className='col-12 text-center'>
                    <div>scroll to see more</div>
                    <IoMdCodeDownload size={28} className='center'/>
                </div>
            </div>
        </div>
    )
}