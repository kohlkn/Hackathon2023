import React from 'react'
import './Styles/Home.css'
import './Components/Button.css'
import {useNavigate} from 'react-router-dom'
import AutoComplete from 'react-google-autocomplete'
import bg from './Images/background.jpg'
import bgs from './Images/background.png'


export default function Home() {

    const navigate = useNavigate();
    //const imageUrl = window.innerWidth >= 650 ? bg : bgs;

    function handleClick(e) {
        navigate('/Survey')
    }

    return (
        <div>
            <header>
                <center>
                <img src={bg} class='bg' />
                    <div><br></br></div>
                    <div class='box'>
                        <h1 class='typed'>Welcome to TrekSpec</h1>
                        <h2>hello</h2>
                        <button class='button' onClick={handleClick}>Get Started</button>
                    </div>
                </center>
            </header>

            <footer>
                Contact
                About Us
            </footer>
        </div>
    )
}