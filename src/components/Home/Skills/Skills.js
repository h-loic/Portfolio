import React, { Component } from 'react'
import './skills.scss'
import ReactCardCarousel from "react-card-carousel";
import {MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from 'react-icons/md'

export default class Skills extends Component {

    constructor(props) {
        super(props);
        this.Carousel = null;
        this.setCarouselRef = element => {
            this.Carousel = element;
        };
    }

    render(){
        return (
            <div id="skills-part" className='container'>
                <div className='part-content row'>
                    <div className='text-center margin-header h1 part-title col-12'>
                        My Skills
                    </div>
                    <div className='col-md-1 col-2 z-2 center' onClick={() => this.Carousel.prev()}>
                        <span>
                            <MdOutlineArrowBackIos size={48} className='center vertical-align' />
                        </span>
                    </div>
                    <div className='col-md-10 col-8 h1 box-container z-1'>
                        <ReactCardCarousel autoplay={ false } disable_keydown={true} ref={ Carousel => this.Carousel = Carousel }>
                        <div className='box'>
                            <div className='row d-flex'>
                                <div className='col-12 text-center h3'>Web development</div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/html.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/css.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/nodejs.jpg")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/php.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/laravel.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/react.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/vuejs.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/bootstrap.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/blazor.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/net.png")}/></div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='row d-flex'>
                                <div className='col-12 text-center h3'>Databases</div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/mongodb.webp")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/mysql.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/firebase.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/microsql.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/sql.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/nosql.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/posrgresql.png")}/></div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='row d-flex'>
                                <div className='col-12 text-center h3'>Programming languages</div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/java.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/c.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/c++.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/js.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/csharp.png")}/></div>
                                <div className='col-6 col-md-4 text-center'><img className='w-33 icons-margin' alt='icon' src={require("../../../assets/img/icons/python.png")}/></div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='row d-flex'>
                                <div className='col-12 text-center h3'>project management</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Scrum</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>UML</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>OCL</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Use case</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Sequence diagram</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>State machine diagram</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Git</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>GitLab</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>SysML</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Gantt</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>PERT</div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='row d-flex'>
                                <div className='col-12 text-center h3'>Soft Skills</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Teamwork</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Patient</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Calm</div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='row d-flex'>
                                <div className='col-12 text-center h3'>Languages</div>
                                <div className='col-12 text-center icons-margin'>French Native</div>
                                <div className='col-12 text-center icons-margin'>English B2 (2021)</div>
                                <div className='col-12 text-center'><img className='w-33' alt='icon' src={require("../../../assets/img/icons/linguaskill.jpg")}/></div>
                                <div className='col-12 text-center icons-margin'>German B1 (2015)</div>
                                <div className='col-12 text-center'><img className='w-33' alt='icon' src={require("../../../assets/img/icons/kmk.jpg")}/></div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='row d-flex'>
                                <div className='col-12 text-center h3'>Knowledge</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Design Pattern</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Restful API</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Object-oriented</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Software Design</div>
                                <div className='col-6 col-md-4 text-center icons-margin'>Software Architecture</div>
                            </div>
                        </div>
                        </ReactCardCarousel>
                    </div>
                    <div className='col-md-1 col-2 z-2 center' onClick={() => this.Carousel.next()}>
                        <MdOutlineArrowForwardIos size={48} className='center vertical-align' />
                    </div>
                </div>
            </div>
        )
    }
}