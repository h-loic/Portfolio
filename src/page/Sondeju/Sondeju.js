import React,{useEffect,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './sondeju.scss'
import {useLocation} from 'react-router-dom';
import Slider from "react-slick";

export default function Sondeju() {

    const location = useLocation();
    const [isSmallScreen,setIsSmallScreen] = useState(false)

    useEffect(() => {
        if(window.innerWidth < 800){
          setIsSmallScreen(true);
        }
      }, [])

    var settings = {
        dots: true,
        infinite: true,
        dotsClass: "slick-dots",
        slidesToShow: isSmallScreen? 1 : 2,
        slidesToScroll: 1
      };

    return (
        <div className='project-containter container'>
            <div className='row'>
                <div className='col-12'>
                    <Navbar/>
                </div>
                <div className='col-12 text-center'>
                    <span className='text-white project-page-title'>Sondeju</span>
                </div>
                <div className='col-12 mt-2'>
                    <a href='https://sondeju.netlify.app/' class="button-87" role="button">{location.state.dictionary.visit}</a>
                </div>
                <div className='col-12 mt-2'>
                    <span className='text-white project-page-description'>{location.state.dictionary.surveyProject}</span>
                </div>
                <div className='col-1'/>
                <div className='col-10 mt-5'>
                    <Slider {...settings}>
                        <img className='p-1' src={require("../../assets/img/projects/sondejuWelcome.png")}></img>
                        <img className='p-1' src={require("../../assets/img/projects/sondejuCreation.png")}></img>
                        <img className='p-1' src={require("../../assets/img/projects/sondejuResult.png")}></img>
                    </Slider>
                </div>
                <div className='col-1'/>
            </div>
        </div>
    )
}