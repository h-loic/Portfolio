import React,{useEffect,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useLocation} from 'react-router-dom';
import Slider from "react-slick";

export default function Digitergo() {

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
        slidesToShow: isSmallScreen? 3 : 4,
        slidesToScroll: 1
      };

    return (
        <div className='project-containter container'>
            <div className='row'>
                <div className='col-12'>
                    <Navbar/>
                </div>
                <div className='col-12 text-center'>
                    <span className='text-white project-page-title'>DigitErgo</span>
                </div>
                <div className='col-12 mt-2'>
                    <span className='text-white project-page-description'>{location.state.dictionary.digitErgo}</span>
                </div>
                <div className='col-1'/>
                <div className='col-10 mt-5'>
                    <Slider {...settings}>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/accueilconins.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/accueilapp.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/accueilDiag.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/diagetape2.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/diagetape3.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/diagetape4.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/diagetape5.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/contactaccueil.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/ContactAssurer.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/ContactconseilIA.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/contactentreprise.png")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/equipement.png")}></img>
                    </Slider>
                </div>
                <div className='col-1'/>
                <div className='col-12 project-page-description text-white mt-5 mb-5'>
                    {location.state.dictionary.technologyUsed} <br/> ReactJS, Fastify, nodeJS, mongoose, mongoDB, Redux
                </div>
            </div>
        </div>
    )
}