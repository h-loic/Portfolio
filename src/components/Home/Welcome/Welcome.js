import React from 'react'
import './welcome.scss'
import Typical from 'react-typical'

export default function Welcome() {


    return (
        <div id="welcome-part">
            <div className='title'>
                <span className='name h1 pb-3 mb-3'>            
                    LOIC HUG
                </span><br/>
                <span className='h2'>
                    <Typical
                        steps={['Software Engineer', 1000, 'Software Engineer soon', 5000]}
                        loop={Infinity}
                        className='mt-5'
                    />
                </span>
            </div>
        </div>
    )
}