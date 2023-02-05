import React, { useState } from 'react'
import './Styles/Survey.css'
import './Components/Button.css'

export default function Survey() {

    const [selectedOption, setSelectedOption] = useState('')
    const [selectedOptionTwo, setSelectedOptionTwo] = useState('')

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleOptionChangeTwo = (e) => {
        setSelectedOptionTwo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOption)
        console.log(selectedOptionTwo)
    }

    return (
        <div>
        <div class='the'>
            <h2 class='h2'> Please answer these questions so that I can get to know you better!!!
            </h2>
            <form onSubmit={handleSubmit}>
            
            
            <div>
                Please enter the address of where you are staying.
            </div>
            <div>
            What is your preferred travel radius?
        <div class='ok'>
        
        <input type="radio" id="one" name="radius" value="onemile"
            checked={selectedOption === 'onemile'}
            onChange={handleOptionChange}/>
        <label for="one">1 mile</label><br></br>
        <input type="radio" id="five" name="radius" value="fivemiles"
            checked={selectedOption === 'fivemiles'}
            onChange={handleOptionChange}/>
        <label for="five">5 miles</label><br></br>
        <input type="radio" id="ten" name="radius" value="tenmiles"
            checked={selectedOption === 'tenmiles'}
            onChange={handleOptionChange}/>
        <label for="ten">10 miles</label><br></br>

            <br></br>
        </div>
            </div>
            {/*
            <div class='typeoffood'>
                What type of food do you like?
                
            </div>
            <div class=''>

            <input type="checkbox" id="italian" name="italian" value="ITALIAN"/>
            <label for="italian">Italian</label><br></br>
            <input type="checkbox" id="asian" name="asian" value="ASIAN"/>
            <label for="asian">Asian </label><br></br>
            <input type="checkbox" id="hispanic" name="hispanic" value="HISPANIC"/>
            <label for="hispanic">Hispanic</label><br></br>
            <input type="checkbox" id="american" name="american" value="AMERICAN"/>
            <label for="american">American</label><br></br>

            <br></br>
            </div>
            */}
            <div>
            What is your preferred price range?
            <div class='price'>

            <input type="radio" id="$" name="price" value="cheap"
            checked={selectedOptionTwo === 'cheap'}
            onChange={handleOptionChangeTwo}/>
            <label for="$">$</label><br></br>
            <input type="radio" id="$$" name="price" value="medium"
            checked={selectedOptionTwo === 'medium'}
            onChange={handleOptionChangeTwo}/>
            <label for="$$">$$</label><br></br>
            <input type="radio" id="$$$" name="price" value="expensive"
            checked={selectedOptionTwo === 'expensive'}
            onChange={handleOptionChangeTwo}/>
            <label for="$$$">$$$</label><br></br>

            </div>
        </div>
        
            <br></br>
            <button class='button' type='submit'>Submit</button>
            </form>
        </div>
        <br></br>

        </div>
            
    )
}