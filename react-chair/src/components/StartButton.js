import React from 'react'

const StartButton = (props) => {

    let selectedWord = 'default';
    if (props.char ==="chad"){
        const zooWords = ['flora','dinosaur','fauna','octopus'];
        selectedWord = zooWords[Math.floor(Math.random() * zooWords.length)]; 
    } else {
        const nerdWords =['computer','python','programming','interface','hardware'];
        selectedWord = nerdWords[Math.floor(Math.random() * nerdWords.length)];
    }

    function handleStart(){
        props.getGameState('start');
        props.func(selectedWord);
    }

    if (props.gameState !=  "menu"){
        return (
            <div>
                <button onClick={handleStart} className="start-button" style={{display:"none"}}>Start Game!</button>
            </div>
        )
    } else {
        return (
            <div>
                 <button onClick={handleStart} className="start-button">Start Game!</button>
            </div>
          )
    }
    
}

export default StartButton