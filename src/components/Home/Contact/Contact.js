import React, { useState } from 'react'
import './contact.scss'
import {GoLocation} from 'react-icons/go'
import {MdMailOutline} from 'react-icons/md'

export default function Contact() {

    const [name,setName] = useState("");
    const [nameError,setNameError] = useState("");
    const [mail,setMail] = useState("");
    const [mailError,setMailError] = useState("");
    const [mailContent,setMailContent] = useState("");
    const [mailContentError,setMailContentError] = useState("");
    const [validation,setValidation] = useState("");

    const checkMailFormat = ( email ) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
    }

    const sendMail = () => {
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
            console.log("send mail")
            setName("");
            setMail("");
            setMailContent("");
            setValidation("thank you for your interest, your has been sent !")
        }
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
                        <input className='input' value={name} onChange={e => setName(e.target.value)}/>
                        <span className='text-danger mb-3'>{nameError}</span><br/>
                        <span className=''>e-mail</span>
                        <input className='input' value={mail} onChange={e => setMail(e.target.value)}/>
                        <span className='text-danger mb-3'>{mailError}</span><br/>
                        <span className=''>message</span>
                        <textarea className='input text-area-height' value={mailContent} onChange={e => setMailContent(e.target.value)}/>
                        <span className='text-danger mb-3'>{mailContentError}</span><br/>
                        <div className="wrapper w-100">
                            <button onClick={() => sendMail()}><span>Send</span></button>
                        </div>
                        <span className='text-success mb-3'>{validation}</span>
                    </div>
                    <div className='col-1 col-md-2'></div>
                </div> 
            </div>
            <div className='footer text-center light-grey' placeholder='zidugz'>
                Designed & Build by Loïc Hug 
            </div>
        </div>
    )
}