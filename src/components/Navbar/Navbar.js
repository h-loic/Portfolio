import React from 'react'
import './navbar.scss'
import {VscArrowLeft} from 'react-icons/vsc'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate(); 

    return (
        <div className='navbar'>
            <VscArrowLeft size={48} className='text-light' onClick={() => navigate(-1)}  />
        </div>
    )
}