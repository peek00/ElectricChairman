import React from 'react'

const IngameChar = (props) => {
    let src = "svg/BatteryCharge" + props.wrongLetters.length + ".png";

    if (props.gameState === "start" || props.gameState ==='win') {
        if (props.char === "chad") {
            return (
                <div>
                    <div className ="hangman" style={{display:"block"}} >
                        <img className="chair pixelart" src="svg/Chair.png" style={{display:"block"}}/>
                        <img className="chad-selected pixelart" src="svg/Custom Zookeeper.png" style={{display:"block"}} />
                        <img className="electric pixelart" src={src} style={{display:"block"}}/>
                    </div>    
                </div> 
            )
        } else {
            return (
            <div>
                <div className ="hangman" style={{display:"block"}} >
                    <img className="chair pixelart" src="svg/Chair.png" style={{display:"block"}}/>
                    <img className="nerd-selected pixelart" src="svg/Custom Nerd.png" style={{display:"block"}} />
                    <img className="electric pixelart" src={src} style={{display:"block"}}/>      
                </div>     
            </div>
            )
        }

    }
  
}

export default IngameChar