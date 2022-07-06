import React from 'react'
import './welcome.scss'
import Typical from 'react-typical'
import {IoMdCodeDownload} from 'react-icons/io'

export default function Welcome() {

    return (
        <div id="welcome-part" className='container'>
            <div class="arrow arrow--bottom">
    <svg xmlns="http://www.w3.org/2000/svg" width="31.35" height="649.9" overflow="visible">
      <g class="item-to bounce-1">
        <circle className="geo-arrow item-to bounce-3" cx="15.5" cy="580.36" r="7.96" />
        <circle className="geo-arrow draw-in" cx="15.5" cy="610.4" r="7.96" />
        <circle class="geo-arrow item-to bounce-2" cx="15.5" cy="640.44" r="7.96" />
        <g class="item-to bounce-2">
          <path class="geo-arrow draw-in" d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552" />
        </g>
      </g>
    </svg>
  </div>
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
                </div>
                <div className='col-12 text-center'>
                    <div>scroll to see more</div>
                    <IoMdCodeDownload size={28} className='center'/>
                </div>
            </div>
        </div>
    )
}