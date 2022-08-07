import React, {useEffect, useState} from 'react'
import { checkWin } from '../helpers/helpers';

const WordContainer = (props) => {
    const [correctLetters,setCorrectLetters] = useState([]);
    const [wrongLetters,setWrongLetters] = useState([]);
    
   

    function sendWrongLetters(x){
            props.wrongFunc(x);  
    }
   

    if (checkWin(correctLetters, wrongLetters, props.word) === "win"){
        props.getGameState("win");

        setCorrectLetters([]);
        setWrongLetters([]);
    } 




    useEffect( () => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (props.gameState === "start") {
                if ( (keyCode >= 65 && keyCode <= 90 ) || (keyCode >= 97 && keyCode <=112)) {
                    const letter = key.toLowerCase();
                    if (props.word.includes(letter)){
                        if (!correctLetters.includes(letter)) {
                            setCorrectLetters(currentLetters => [...currentLetters, letter]);
                            //Display Word
                        } else {
                            //Show repeat letter / noti
                        }
                    } else {
                        //Enter Wrong letter
                        if (!wrongLetters.includes(letter)){
                            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
                            sendWrongLetters(wrongLetters);
                        } else{
                            //Show repeat letter
                        }
                    }
                }
                console.log("Playing!");
            }
            
        }
        window.addEventListener('keydown',handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    },[correctLetters, wrongLetters,props.gameState])
    if (props.gameState === 'start')  {
            return (
                <div>
                    <div className="word" id="word" style={{display:"block"}}>
                        {props.word.split('').map( (letter, i) => {
                            return (
                            <span className='letter' key={i}>
                                {correctLetters.includes(letter)?letter:''}
                            </span>
                            )
                        })}

                    </div>
                </div>
            )
        }
}

export default WordContainer