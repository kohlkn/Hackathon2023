//import react from 'react'
import './Styles/Survey.css'
import './Components/Button.css'

export default function Survey() {

    return (
        <div>
        <div class='the'>
            <h2 class='h2'> Please answer these questions so that I can get to know you better!!!
            </h2>
            
            
            <div>
                Please enter the address of where you are staying.
            </div>
            <div>
            What is your preferred travel radius?
        <div class='ok'>
        <form>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label for="html">1 mile</label><br></br>
            <input type="radio" id="css" name="fav_language" value="CSS"/>
            <label for="css">5 mile</label><br></br>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
            <label for="javascript">10 mile</label><br></br>
            </form>
            <br></br>
        </div>
            </div>
            <div class='typeoffood'>
                What type of food do you like?
                
            </div>
            <div class=''>
            <form class='food'>
            <input type="checkbox" id="italian" name="fav_language" value="ITALIAN"/>
            <label for="italian">Italian</label><br></br>
            <input type="checkbox" id="asian" name="fav_language" value="ASIAN"/>
            <label for="asian">Asian </label><br></br>
            <input type="checkbox" id="hispanic" name="fav_language" value="HISPANIC"/>
            <label for="hispanic">Hispanic</label><br></br>
            <input type="checkbox" id="american" name="fav_language" value="AMERICAN"/>
            <label for="american">American</label><br></br>
            </form>
            <br></br>
            </div>
            <div>
            What is your preferred price range?
            <div class='price'>
        <form>
            <input type="radio" id="$" name="fav_language" value="$"/>
            <label for="$">$</label><br></br>
            <input type="radio" id="$$" name="fav_language" value="$$"/>
            <label for="$$">$$</label><br></br>
            <input type="radio" id="$$$" name="fav_language" value="$$$"/>
            <label for="$$$">$$$</label><br></br>
            </form>
        </div>
        </div>
            <br></br>
            <button class='button'>Submit</button>
        </div>
        <br></br>
        </div>
            
    )
}