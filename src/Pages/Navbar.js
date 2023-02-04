import react from 'react'
import './Styles/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <ul class='list'>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/Survey'>Survey</Link></li>
                <li><Link to='/Itinerary'>Itinerary</Link></li>
            </ul>
        </div>
    )
}