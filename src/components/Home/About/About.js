import React from 'react'
import './about.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function About(props) {

    var settings = {
        dots: true,
        infinite: false,
        dotsClass: "slick-dots"
      };

    return (
        <div id="about-part">
            <div className='part-content row'>
                <div className='text-center margin-header h1 part-title col-12'>
                    {props.dictionary.headerAboutMe}
                </div>
                <div className='content-about-part container'>
                    <Slider {...settings} >
                        <div className='timeline-item'>
                            <span className='timeline-year text-center'>2015  &  2018</span>
                            <div className='timeline-content justify-content-center'>
                                <div className='text-content'>
                                    <p className='dark-gray timeline-title'>Collège de Ferrette</p>
                                    <p className='dark-gray timeline-title'>Ferrette (FR)</p>
                                    <p className='light-red timeline-title'>Brevet - Mention Très Bien</p>
                                    <p className='dark-gray mt-4 timeline-title'>Lycée Jean-Jacques Henner</p>
                                    <p className='dark-gray timeline-title'>Altkirch (FR)</p>
                                    <p className='light-red timeline-title'>Baccalauréat S SI - Mention Bien</p>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-item'>
                            <span className='timeline-year text-center'>2018 - 2020</span>
                            <div className='timeline-content justify-content-center'>
                                <div className='text-content'>
                                    <p className='dark-gray timeline-title'>IUT Belfort-Montbéliard - Cegep de Matane</p>
                                    <p className='dark-gray timeline-title'>Belfort (FR) / Matane (QC)</p>
                                    <p className='light-red timeline-title'>DUT Informatique - 120 ECTS</p>
                                    <p className='dark-gray mt-4 timeline-info'>{props.dictionary.dutKnowledge}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-item'>
                            <span className='timeline-year text-center'>2020 - 2021</span>
                            <div className='timeline-content justify-content-center'>
                                <div className='text-content'>
                                    <p className='dark-gray timeline-title'>Université de Technologie de Belfort-Montbéliard (UTBM)</p>
                                    <p className='dark-gray timeline-title'>Belfort (FR)</p>
                                    <p className='light-red timeline-title'>{props.dictionary.engineeringCourse1}</p>
                                    <p className='dark-gray mt-4 timeline-info'>
                                        {props.dictionary.UTBMKnowledge}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-item'>
                            <span className='timeline-year text-center'>2021</span>
                            <div className='timeline-content justify-content-center'>
                                <div className='text-content'>
                                    <p className='dark-gray timeline-title'>BASF Schweiz AG</p>
                                    <p className='dark-gray timeline-title'>{props.dictionary.basel} (CH)</p>
                                    <p className='light-red timeline-title'>{props.dictionary.ST40}</p>
                                    <p className='dark-gray mt-4 timeline-info'>
                                        {props.dictionary.traineeSubject}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-item'>
                            <span className='timeline-year text-center'>2022</span>
                            <div className='timeline-content justify-content-center'>
                                <div className='text-content'>
                                    <p className='dark-gray timeline-title'>Université de Technologie de Belfort-Montbéliard (UTBM)</p>
                                    <p className='dark-gray timeline-title'>Belfort (FR)</p>
                                    <p className='light-red timeline-title'>{props.dictionary.engineeringCourse2}</p>
                                    <p className='dark-gray mt-4 timeline-info'>
                                        {props.dictionary.UTBMSpe1}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}