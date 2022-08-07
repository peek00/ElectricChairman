import React,{useEffect, useState} from 'react'

const DeathAnimation = (props) => {

    if (props.gameState === "death") {
        return (
            <div>
                <div className ="hangman" style={{display:"block"}} >
                    <img  className="chair pixelart" src="svg/Chair.png" style={{display:"block"}}/>
                    <div  className="ghostOverflow" style={{display:"block"}}>
                        <img  className="ghost pixelart" src="svg/Ghost.png" style={{display:"block"}}/>
                    </div>      
                    <img className="electric pixelart" src="svg/BatteryCharge0.png" style={{display:"block"}}/>
                    {/* <div className="fadeOut" style={{display:"block"}></div> */}
                    <div className="death-animation pixelart" style={{display:"block"}}>
                        <img className="death" src="svg/Electrocution.png" style={{display:"block"}}/>           
                    </div>         
                </div>  
            </div>
        )
 }
}


export default DeathAnimation