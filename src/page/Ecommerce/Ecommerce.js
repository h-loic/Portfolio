import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useLocation} from 'react-router-dom';

export default function Ecommerce() {

    const location = useLocation();

    return (
        <div className='project-containter container'>
            <div className='row'>
                <div className='col-12'>
                    <Navbar/>
                </div>
                <div className='col-12 text-center'>
                    <span className='text-white project-page-title'>Green IT</span>
                </div>
                <div className='col-12 mt-2'>
                    <span className='text-white project-page-description'>{location.state.dictionary.greenIT}</span>
                </div>
                <div className='col-1'/>
                <div className='col-10 mt-5'>
                    <iframe
                        className='w-100 video'
                        src="https://www.youtube.com/embed/V451BKt-A-8"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />
                </div>
                <div className='col-1'/>
                <div className='col-12 project-page-description text-white mt-5 mb-5'>
                    {location.state.dictionary.technologyUsed} <br/> React JS, fastify, nodeJS, mongoDB
                </div>
            </div>
        </div>
    )
}