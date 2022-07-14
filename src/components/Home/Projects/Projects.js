import React,{useEffect, useState} from 'react'
import './projects.scss'
import { useVisibilityHook } from 'react-observer-api';
import { useNavigate } from "react-router-dom";

export default function Projects(props) {

    const navigate = useNavigate(); 

    const { setElement, isVisible } = useVisibilityHook();
    const [reveal,setReveal] = useState("")
    const [revealInner,setRevealInner] = useState("")
    const [invisible,setInvisible] = useState("invisible")

    useEffect(() => {
        if (isVisible) {
            setInvisible("")
            setReveal("reveal")
            setRevealInner("reveal-inner")
        }
    }, [isVisible])

    return (
        <div ref={setElement} id="project-part">
            <div className='part-content row'>
                <div className='text-center margin-header h1 project-part-title col-12'>
                    {props.dictionary.headerProjects}
                </div>
                    <div className='w-100 row m-0'>
                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}`} >
                            <div className={`project-title ${revealInner} ${invisible}`}>{props.dictionary.surveyProject}</div>
                            <span className={`more-info ${revealInner} ${invisible}`} onClick={() => navigate("/sondeju",{state:{dictionary:props.dictionary}})}>{props.dictionary.moreInfo}</span>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}2`}>
                            <div className={`project-title ${revealInner}2 ${invisible}`}>{props.dictionary.mobileProject}</div>
                            <span className={`more-info ${revealInner}2 ${invisible}`} onClick={() => navigate("/mobileApp",{state:{dictionary:props.dictionary}})}>{props.dictionary.moreInfo}</span>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}3`}>
                            <div className={`project-title ${revealInner}3 ${invisible}`}>{props.dictionary.terraGenesis}</div>
                            <span className={`more-info ${revealInner}3 ${invisible}`} onClick={() => navigate("/terragenesis",{state:{dictionary:props.dictionary}})}>{props.dictionary.moreInfo}</span>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}4`}>
                            <div className={`project-title ${revealInner}4 ${invisible}`}>{props.dictionary.greenIT}</div>
                            <span className={`more-info ${revealInner}4 ${invisible}`}>{props.dictionary.moreInfo}</span>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}5`}>
                            <div className={`project-title ${revealInner}5 ${invisible}`}>{props.dictionary.asdWebSite}</div>
                            <span className={`more-info ${revealInner}5 ${invisible}`}>{props.dictionary.moreInfo}</span>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}6`}>
                            <div className={`project-title ${revealInner}6 ${invisible}`}>{props.dictionary.digitErgo}</div>
                            <span className={`more-info ${revealInner}6 ${invisible}`}>{props.dictionary.moreInfo}</span>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}7`}>
                            <div className={`project-title ${revealInner}7 ${invisible}`}>{props.dictionary.tp}</div>
                        </div>
                        <div className='col-1 col-md-2'/>
                    </div>    
            </div>
        </div>
    )
}