import React, {useRef, useState } from 'react'
import './contact.scss'
import {GoLocation} from 'react-icons/go'
import {MdMailOutline} from 'react-icons/md'
import Axios from 'axios'

export default function Contact() {

    const buttonRef = useRef();
    const svgRef = useRef();

    const [name,setName] = useState("");
    const [nameError,setNameError] = useState("");
    const [mail,setMail] = useState("");
    const [mailError,setMailError] = useState("");
    const [mailContent,setMailContent] = useState("");
    const [mailContentError,setMailContentError] = useState("");
    const [validation,setValidation] = useState("");
    const [loading,setLoading] = useState(false)

    const checkMailFormat = ( email ) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
    }

    const sendMail = async () => {
        setLoading(true);
        setValidation("");
        let error = false;
        if(name === ""){
            setNameError("your name is mandatory");
            error = true;
        }else{
            setNameError("");
        }
        if(mail === ""){
            setMailError("your mail is mandatory");
            error = true;
        }else if (!checkMailFormat(mail)){
            setMailError("enter a valid e-mail format");
            error = true;
        }else{
            setMailError("");
        }
        if(mailContent === ""){
            setMailContentError("the mail content is mandatory");
            error = true;
        }else{
            setMailContentError("");
        }
        if(!error){
            try {
                await Axios.post("http://localhost:4000/send_mail",{mailContent : mailContent, name : name, mail : mail}).then(res=>{
                    setName("");
                    setMail("");
                    setMailContent("");
                    setValidation("thank you for your interest, your mail has been sent !")
                })
            } catch (error) {
                console.error(error);
            }
        }
        setLoading(false);
	}


    return (
        <div id="contact-part">
            <div className='row'>
                <div className='text-center margin-header h1 part-title col-12'>
                    Contact Me
                </div>
            </div>
            <div className='content-part container'>
                <div className='row justify-content-center'>
                    <div className='col-1 col-md-2'></div>
                    <div className='col-10 col-md-8 row justify-content-center'>
                        <div className='col-5 blue-border text-center row m-0'>
                            <GoLocation size={28} className='center light-blue m-auto'/>
                            <span className='light-blue contact-text'>Moernach</span>
                        </div>
                        <div className='col-2'></div>
                        <div className='col-5 blue-border text-center row m-0'>
                            <MdMailOutline size={28} className='center light-blue m-auto'/>
                            <span className='light-blue contact-text'>h-loic@orange.fr</span>
                        </div>
                    </div>
                    <div className='col-1 col-md-2'></div>
                </div>
                <div className='row mt-4'>
                    <div className='col-1 col-md-2'></div>
                    <div className='col-10 col-md-8 text-light light-blue contact-info-text'>
                        Interested in working together? Fill out the form below.
                    </div>
                    <div className='col-1 col-md-2'></div>
                </div> 
                <div className='row mt-2'>
                    <div className='col-1 col-md-2'></div>
                    <div className='col-10 col-md-8 light-blue'>
                        <span className=''>Name</span>
                        <input className='input' name="name" value={name} onChange={e => setName(e.target.value)}/>
                        <span className='text-danger'>{nameError} &nbsp;</span><br/>
                        <span className=''>e-mail</span>
                        <input className='input' name="mail" value={mail} onChange={e => setMail(e.target.value)}/>
                        <span className='text-danger'>{mailError} &nbsp;</span><br/>
                        <span className=''>message</span>
                        <textarea className='input text-area-height' name='content' value={mailContent} onChange={e => setMailContent(e.target.value)}/>
                        <span className='text-danger'>{mailContentError} &nbsp;</span><br/>
                        <div className="wrapper w-100">
                            {!loading ?
                                <button onClick={sendMail} ref={buttonRef}>Send</button>
                                :
                                <svg ref={svgRef} className='loader' version="1.1" id="L7" x="0px" y="0px"
                                    viewBox="0 0 100 100"  >
                                    <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
                                    c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
                                        <animateTransform 
                                            attributeName="transform" 
                                            attributeType="XML" 
                                            type="rotate"
                                            dur="2s" 
                                            from="0 50 50"
                                            to="360 50 50" 
                                            repeatCount="indefinite" />
                                    </path>
                                    <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
                                    c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
                                        <animateTransform 
                                            attributeName="transform" 
                                            attributeType="XML" 
                                            type="rotate"
                                            dur="1s" 
                                            from="0 50 50"
                                            to="-360 50 50" 
                                            repeatCount="indefinite" />
                                    </path>
                                    <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
                                    L82,35.7z">
                                        <animateTransform 
                                            attributeName="transform" 
                                            attributeType="XML" 
                                            type="rotate"
                                            dur="2s" 
                                            from="0 50 50"
                                            to="360 50 50" 
                                            repeatCount="indefinite" />
                                    </path>
                                </svg>
                            }
                        </div>
                        <span className='text-success mb-3'>{validation}</span>
                    </div>
                    <div className='col-1 col-md-2'></div>
                </div> 
            </div>
            <div className='footer text-center light-gray' placeholder='zidugz'>
                Designed & Build by Loïc Hug 
            </div>
        </div>
    )
}