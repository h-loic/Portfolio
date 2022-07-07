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
                                    <p className='dark-gray mt-4 timeline-info'>fundamental math tools / web development / system and networks / advanced algorithms
                                     / database / server side web programming / optimization technique / distributed programming
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
                                    <p className='light-red timeline-title'>Engineering cours (Scientific knowledge)</p>
                                    <p className='dark-gray mt-4 timeline-info'>
                                    object-oriented programming / Statistics for the engineer / embedded computing / Human-Computer Interface / Networks and Cybersecurity
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='timeline-item'>
                            <span className='timeline-year text-center'>2021</span>
                            <div className='timeline-content justify-content-center'>
                                <div className='text-content'>
                                    <p className='dark-gray timeline-title'>BASF Schweiz AG</p>
                                    <p className='dark-gray timeline-title'>Basel (CH)</p>
                                    <p className='light-red timeline-title'>6 month internship as an assistant engineer</p>
                                    <p className='dark-gray mt-4 timeline-info'>
                                        Migration of an existing application dashboard into the BASF Cloud along with modernization of the technologies. 
                                        The old application is an ASP.NET MVC 5 web application, possible migration to ASP.NET Core Blazor.
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
                                    <p className='light-red timeline-title'>Engineering cours (Techniques and methods)</p>
                                    <p className='dark-gray mt-4 timeline-info'>
                                        Software deployment methods and tools
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