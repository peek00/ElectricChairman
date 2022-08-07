import React, { useContext, Component , useState} from 'react';



function PickChar(props) {
    
    function setChar(event){
        props.getChar(event.target.value);
    }
    
    if (props.gameState === 'menu') {
    return (
        <div>
            <div className="character-options" onChange={setChar} >
                <input  type="radio" name="character" value="chad" id="chad" />
                <label htmlFor="chad">Chad</label>
                <input  type="radio" name="character" value="nerd" id="nerd" />
                <label htmlFor="nerd">Nerd</label>
            </div>
        </div>
            )
        }
}

export default PickChar;
