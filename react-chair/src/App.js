import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import StartCharDisplay from './components/StartCharDisplay';
import CharDetails from './components/CharDetails';
import PickChar from './components/PickChar';
import StartButton from './components/StartButton';
import WordContainer from './components/WordContainer';
import WrongLetters from './components/WrongLetters';
import IngameChar from './components/IngameChar';
import DeathAnimation from './components/DeathAnimation';
import Popup from './components/Popup';
import WinningMsg from './components/WinningMsg';




function App() {
  const [char,setCharParent] = useState('nerd');
  
  function getChar(charSelected){
    setCharParent(charSelected);
  }

  const [gameState,setGameState] = useState('menu');
  function getGameState(gameState){
    setGameState(gameState);
  }

  const [selectedWord, setSelectedWord] = useState('default');
  function getSelectedWord(word){
    setSelectedWord(word);
  }
  
  const [wrongLetters, setWrongLetters] = useState([]);
  function getWrongLetters(wrong){
    setWrongLetters(wrong);
  }


  

  return (
    <div>
      <Header/>
        <div className="game-container">
          <StartCharDisplay char={char} gameState={gameState}/> 
          <CharDetails gameState={gameState} char={char}/>
          <PickChar getChar={getChar} gameState={gameState}/>
          <IngameChar gameState={gameState} char={char} wrongLetters={wrongLetters}/>
          <DeathAnimation gameState={gameState}/>
        </div>


        <div className="lower-half" >
          <StartButton getGameState={getGameState} gameState={gameState} char={char} func={getSelectedWord}/>
          <WordContainer gameState={gameState} char={char} word={selectedWord} wrongFunc={getWrongLetters} getGameState={getGameState}/> 
          <WrongLetters wrongLetters={wrongLetters} getGameState={getGameState} gameState={gameState} getWrongLetters={getWrongLetters}/>
        </div>

        <div className="popup-container" style={{display:"flex",opacity:1}}>
          <Popup gameState={gameState} getGameState={getGameState} />         
        </div>

        <div class="winning-container" style={{display:"flex"}}>
          <WinningMsg gameState={gameState}/>
        </div>

        
      
  
 
    </div>
    
  );
}

export default App;
