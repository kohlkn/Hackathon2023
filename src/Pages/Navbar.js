import react from 'react'
import './Styles/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <ul class='list'>
                <li><a href='/Home'>Home</a></li>
                <li><a href='/Survey'>Survey</a></li>
                <li><a href='/Itinerary'>Itinerary</a></li>
            </ul>
        </div>
    )
}