import React, {useContext} from 'react';




function StartCharDisplay(props)  {

  if (props.gameState === "menu") {
    if (props.char === "chad") {
      return(
        <div>
        <h1>Select your Victim!</h1>
            <div className="character" id="character">
                <img className="character-chad-spritesheet pixelart" src="svg/Custom Zookeeper.png" style={{display: "block"}} />
                <img className="character-nerd-spritesheet pixelart" src="svg/Custom Nerd.png" style={{display: "none"}}/>
            </div>
        </div>
      )
    } else {
      return(
        <div>
        <h1>Select your Victim!</h1>
        
            <div className="character" id="character">
                <img className="character-chad-spritesheet pixelart" src="svg/Custom Zookeeper.png" style={{display: "none"}} />
                <img className="character-nerd-spritesheet pixelart" src="svg/Custom Nerd.png" style={{display: "block"}}/>
            </div>
        </div>
      )
    }
  }

  
  
};

export default StartCharDisplay;