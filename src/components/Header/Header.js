import React, { useState } from 'react'
import './header.scss'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineDownload} from 'react-icons/ai'
import ReactFlagsSelect from "react-flags-select";
import { useLanguage } from '../../context/languageContext'

export default function Header(props) {

    const { userLanguage, setUserLanguage, dictionary } = useLanguage();

    const onSelect = (code) =>{
        setUserLanguage(code);
    } 

    const [isOpen,setIsOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const goToPage = (pageNumber) => {
        setChecked(false)
        toggleMenu();
        props.goToPage(pageNumber);
      }

      const goHome = () =>{
        props.goToPage(0);
      }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className="header">
                <div className='header-margin'></div>
                <div className="responsive-container">
                    <h1 onClick={() => goHome()}>Loïc Hug</h1>
                    <nav>
                        <ReactFlagsSelect
                            className='nav-item flag align-bottom'
                            selected={userLanguage}
                            onSelect={onSelect}
                            countries={["GB", "FR", "DE"]}
                            showOptionLabel={false}
                            showSelectedLabel={false}
                            fullWidth={false}
                            selectedSize={28}
                            optionsSize={28}
                            alignOptionsToRight={false}
                        />
                        <a href="https://github.com/h-loic" className='nav-item'>
                            <BsGithub size={28} className='center'/>
                        </a>
                        <a href="https://www.linkedin.com/in/lo%C3%AFc-hug-08b2b7183/" className='nav-item'>
                            <BsLinkedin size={28} className='center'/>
                        </a>
                        <a href={require("../../assets/files/CV.pdf")} className='nav-item' download="LOIC_HUG_CV.pdf">
                            <span className='cv center'>CV</span>
                            <AiOutlineDownload size={28} className='center'/>
                        </a>
                        <a className='center nav-button' href='/'>
                            <input type="checkbox" id="menu-toggle" onClick={toggleMenu} checked={checked} onChange={() => setChecked(!checked)} />
                            <label htmlFor="menu-toggle" className="hamburger">
                                <span className="bun bun-top">
                                    <span className="bun-crust bun-crust-top"></span>
                                </span>
                                <span className="bun bun-bottom">
                                    <span className="bun-crust bun-crust-bottom"></span>
                                </span>
                            </label>
                        </a>
                    </nav>
                </div>
            </header>
                <div id="myNav" className="overlay no-scrollbar"         
                    style={{
                        height : isOpen ? "100%" : "0%"
                    }}>
                    <div className="overlay-content">
                        { !props.isSmallScreen ?
                            <>
                                <span onClick={() => goToPage(0)}>{dictionary.headerHome}</span>
                                <span onClick={() => goToPage(1)}>{dictionary.headerSkills}</span>
                                <span onClick={() => goToPage(2)}>{dictionary.headerProjects}</span>
                                <span onClick={() => goToPage(3)}>{dictionary.headerAboutMe}</span>
                                <span onClick={() => goToPage(4)}>{dictionary.headerContactMe}</span>
                            </>
                        :
                            <>
                                <span onClick={() => goToPage(0)}>{dictionary.headerHome}</span>
                                <span onClick={() => goToPage(2)}>{dictionary.headerSkills}</span>
                                <span onClick={() => goToPage(3)}>{dictionary.headerProjects}</span>
                                <span onClick={() => goToPage(4)}>{dictionary.headerAboutMe}</span>
                                <span onClick={() => goToPage(5)}>{dictionary.headerContactMe}</span>
                            </>
                        }
                        <div className='row menu-icons'>
                            <div className='col-1'/>
                            <a href='https://github.com/h-loic' className='col-3'><BsGithub size={28} className='icon'/></a>
                            <a href='https://www.linkedin.com/in/lo%C3%AFc-hug-08b2b7183/' className='col-3'><BsLinkedin size={28} className='icon'/></a>
                            <a href={require("../../assets/files/CV.pdf")} className='col-4 container m-0 p-0' download="LOIC_HUG_CV.pdf">
                                <div className='row m-0 p-0'>
                                    <span className='cv col-5 center mr-0'>CV</span>
                                    <AiOutlineDownload size={28} className='col-5 ml-0 center m-auto'/>
                                </div>
                            </a>
                            <div className='col-1'/>
                        </div>
                    </div>
                </div>
        </>
    )
}