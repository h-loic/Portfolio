import React from 'react'
import './contact.scss'
import {GoLocation} from 'react-icons/go'
import {MdMailOutline} from 'react-icons/md'

export default function Contact() {

    return (
        <div id="contact-part">
            <div className='row'>
                <div className='text-center margin-header h1 part-title col-12'>
                    Contact Me
                </div>
            </div>
            <div className='content-part container'>
                <div className='row justify-content-center'>
                    <div className='col-1 col-md-2'></div>
                    <div className='col-10 col-md-8 row justify-content-center'>
                        <div className='col-5 blue-border text-center row m-0'>
                            <GoLocation size={28} className='center light-blue m-auto'/>
                            <span className='light-blue contact-text'>Moernach</span>
                        </div>
                        <div className='col-2'></div>
                        <div className='col-5 blue-border text-center row m-0'>
                            <MdMailOutline size={28} className='center light-blue m-auto'/>
                            <span className='light-blue contact-text'>h-loic@orange.fr</span>
                        </div>
                    </div>
                    <div className='col-1 col-md-2'></div>
                </div>
                <div className='row mt-4'>
                    <div className='col-1 col-md-2'></div>
                    <div className='col-10 col-md-8 text-light light-blue contact-info-text'>
                        Interested in working together? Fill out the form below.
                    </div>
                    <div className='col-1 col-md-2'></div>
                </div> 
                <div className='row mt-2'>
                    <div className='col-1 col-md-2'></div>
                    <div className='col-10 col-md-8 light-blue'>
                        <span className=''>Name</span>
                        <input className='input mb-3' />
                        <span className=''>e-mail</span>
                        <input className='input mb-3' />
                        <span className=''>message</span>
                        <textarea className='input h-50 mb-3' />
                        <div class="wrapper w-100">
                            <a href="#"><span>Send</span></a>
                        </div>
                    </div>
                    <div className='col-1 col-md-2'></div>
                </div> 
            </div>
            <div className='footer text-center light-grey' placeholder='zidugz'>
                Designed & Build by Loïc Hug 
            </div>
        </div>
    )
}