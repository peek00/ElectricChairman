import React from 'react'

const WinningMsg = (props) => {
    // props.word and props.correctLetters
    if (props.gameState === 'win'){
        return (
            <div>
                <img className="star pixelart" src="svg/Star.png" /> 
                <img  className="star pixelart big" src="svg/Star.png"  />
                <img  className="star pixelart" src="svg/Star.png" />
                <p  className="win-text" style={{"box-sizing":"border-box", display:"inline-flex", "margin-left": "60px"}}>You've won!</p>
            </div>
          )
    }

}

export default WinningMsg