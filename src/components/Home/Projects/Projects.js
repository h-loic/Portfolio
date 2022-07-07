import React,{useEffect, useState} from 'react'
import './projects.scss'
import { useVisibilityHook } from 'react-observer-api';

export default function Projects() {

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
                    My Projects
                </div>
                    <div className='w-100 row m-0'>
                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}`} >
                            <div className={`project-title ${revealInner} ${invisible}`}>Web application for creating and sharing surveys</div>
                            <a className={`more-info ${revealInner} ${invisible}`}>MORE INFO</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}2`}>
                            <div className={`project-title ${revealInner}2 ${invisible}`}>Mobile application social network</div>
                            <a className={`more-info ${revealInner}2 ${invisible}`}>MORE INFO</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}3`}>
                            <div className={`project-title ${revealInner}3 ${invisible}`}>Desktop application of the game "TerraGenesis"</div>
                            <a className={`more-info ${revealInner}3 ${invisible}`}>MORE INFO</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}4`}>
                            <div className={`project-title ${revealInner}4 ${invisible}`}>E-commerce website applying ecodesign principles</div>
                            <a className={`more-info ${revealInner}4 ${invisible}`}>MORE INFO</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}5`}>
                            <div className={`project-title ${revealInner}5 ${invisible}`}>Web application with article/page editing</div>
                            <a className={`more-info ${revealInner}5 ${invisible}`}>MORE INFO</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}6`}>
                            <div className={`project-title ${revealInner}6 ${invisible}`}>Web application to perform diagnostics for a company</div>
                            <a className={`more-info ${revealInner}6 ${invisible}`}>MORE INFO</a>
                        </div>
                        <div className='col-1 col-md-2'/>

                        <div className='col-1 col-md-2'/>
                        <div className={`project-box block col-10 col-md-8 ${reveal}7`}>
                            <div className={`project-title ${revealInner}7 ${invisible}`}>Practical work to implement design patterns in Java and C++</div>
                            <a className={`more-info ${revealInner}7 ${invisible}`}>MORE INFO</a>
                        </div>
                        <div className='col-1 col-md-2'/>
                    </div>    
            </div>
        </div>
    )
}