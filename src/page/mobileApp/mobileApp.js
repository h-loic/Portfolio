import React,{useEffect,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {useLocation} from 'react-router-dom';
import Slider from "react-slick";

export default function MobileApp() {

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
                    <span className='text-white project-page-title'>Mobile App</span>
                </div>
                <div className='col-12 mt-2'>
                    <span className='text-white project-page-description'>{location.state.dictionary.mobileProject}</span>
                </div>
                <div className='col-1'/>
                <div className='col-10 mt-5'>
                    <Slider {...settings}>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appWelcome.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appConnexion.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appReinit.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appDate.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appMail.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appPseudo.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appProfile1.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appProfileEdit.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appCategory.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appCreate.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appCategories.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appProfile2.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appPost.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appComment.jpg")}></img>
                        <img className='p-1' alt='app1' src={require("../../assets/img/projects/appSort.jpg")}></img>
                    </Slider>
                </div>
                <div className='col-1'/>
                <div className='col-12 project-page-description text-white mt-5 mb-5'>
                    {location.state.dictionary.technologyUsed} <br/> React Native, Redux, firebase
                </div>
            </div>
        </div>
    )
}