import React from 'react'
import './about.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function About() {

    var settings = {
        dots: true,
        infinite: false,
        dotsClass: "slick-dots"
      };

    return (
        <div id="about-part">
            <div className='part-content row'>
                <div className='text-center margin-header h1 part-title col-12'>
                    About Me
                </div>
                <div className='content-about-part container'>
                    <Slider {...settings} >
                    <div className='timeline-item'>
                        <span className='timeline-year text-center'>2017 - 2018</span>
                        <div className='timeline-content justify-content-center'>
                            <div className='text-content'>
                                <p className='dark-grey'>Lycée Jean-Jacques Henner</p>
                                <p className='dark-grey'>Altkirch (FR)</p>
                                <p className='light-red'>Baccalauréat S SI - Mention Bien</p>
                            </div>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <span className='timeline-year text-center'>2018 - 2020</span>
                        <div className='timeline-content justify-content-center'>
                            <div className='text-content'>
                                <p className='dark-grey'>IUT Belfort-Montbéliard - Cegep de Matane</p>
                                <p className='dark-grey'>Belfort (FR) / Matane (QC)</p>
                                <p className='light-red'>DUT Informatique - 120 ECTS</p>
                            </div>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <span className='timeline-year text-center'>2020 - ...</span>
                        <div className='timeline-content justify-content-center'>
                            <div className='text-content'>
                                <p className='dark-grey'>Université de Technologie de Belfort-Montnéliard (UTBM)</p>
                                <p className='dark-grey'>Belfort (FR)</p>
                                <p className='light-red'>Engineering cours - 310 ECTS</p>
                            </div>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <span className='timeline-year text-center'>Currently</span>
                        <div className='timeline-content justify-content-center'>
                            <div className='text-content'>
                                <p className='light-red'>I am looking for an internship that could be followed by a hiring</p>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}