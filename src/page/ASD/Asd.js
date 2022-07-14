import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useLocation} from 'react-router-dom';

export default function Asd() {

    const location = useLocation();


    return (
        <div className='project-containter container'>
            <div className='row'>
                <div className='col-12'>
                    <Navbar/>
                </div>
                <div className='col-12 text-center'>
                    <span className='text-white project-page-title'>ASD website</span>
                </div>
                <div className='col-12 mt-2'>
                    <a href='https://asdurlinsdorf.com/' class="button-87" role="button">{location.state.dictionary.visit}</a>
                </div>
                <div className='col-12 mt-2'>
                    <span className='text-white project-page-description'>{location.state.dictionary.asdWebSite}</span>
                </div>
                <div className='col-1'/>
                <div className='col-1'/>
                <div className='col-12 project-page-description text-white mt-5 mb-5'>
                    {location.state.dictionary.technologyUsed} <br/> Laravel
                </div>
            </div>
        </div>
    )
}