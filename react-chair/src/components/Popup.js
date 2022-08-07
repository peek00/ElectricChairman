import React from 'react'

const Popup = (props) => {

    function handleRestart(){
        props.getGameState('menu');
    }
    function handlePlayAgain(){
        props.getGameState('start');
    }


    if (props.gameState === 'death' || props.gameState ==='win') {
        return (
            <div>
                <div className="popup" style={{display:"flex"}} >
                    <button onClick={handlePlayAgain} style={{display: "inline-block", position: "relative"}} >Play Again!</button>
                    <button onClick={handleRestart} style={{display: "inline-block", position: "relative"}} >Main Menu</button>
                </div>
            </div>
          )
    }

}

export default Popup