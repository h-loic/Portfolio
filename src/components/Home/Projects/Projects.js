import React,{useEffect, useState} from 'react'
import './projects.scss'
import { useVisibilityHook } from 'react-observer-api';

export default function Projects(props) {

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
                            <a className={`more-info ${revealInner} ${invisible}`}>{props.dictionary.moreInfo}</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}2`}>
                            <div className={`project-title ${revealInner}2 ${invisible}`}>{props.dictionary.mobileProject}</div>
                            <a className={`more-info ${revealInner}2 ${invisible}`}>{props.dictionary.moreInfo}</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}3`}>
                            <div className={`project-title ${revealInner}3 ${invisible}`}>{props.dictionary.terraGenesis}</div>
                            <a className={`more-info ${revealInner}3 ${invisible}`}>{props.dictionary.moreInfo}</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}4`}>
                            <div className={`project-title ${revealInner}4 ${invisible}`}>{props.dictionary.greenIT}</div>
                            <a className={`more-info ${revealInner}4 ${invisible}`}>{props.dictionary.moreInfo}</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}5`}>
                            <div className={`project-title ${revealInner}5 ${invisible}`}>{props.dictionary.asdWebSite}</div>
                            <a className={`more-info ${revealInner}5 ${invisible}`}>{props.dictionary.moreInfo}</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}6`}>
                            <div className={`project-title ${revealInner}6 ${invisible}`}>{props.dictionary.digitErgo}</div>
                            <a className={`more-info ${revealInner}6 ${invisible}`}>{props.dictionary.moreInfo}</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}7`}>
                            <div className={`project-title ${revealInner}7 ${invisible}`}>{props.dictionary.tp}</div>
                            <a className={`more-info ${revealInner}7 ${invisible}`}>{props.dictionary.moreInfo}</a>
                        </div>
                        <div className='col-1 col-md-2'/>
                    </div>    
            </div>
        </div>
    )
}