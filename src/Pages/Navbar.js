import react from 'react'
import './Styles/Navbar.css'

export default function Navbar() {

    return (
        <div class='nav'>
            <ul class='list'>
                <li><a href='/Home' class='alist'>Home</a></li>
                <li><a href='/Survey' class='alist'>Survey</a></li>
                <li><a href='/Itinerary' class='alist'>Itinerary</a></li>
            </ul>
        </div>
    )
}