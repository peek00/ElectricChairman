import React from 'react'

const CharDetails = (props) => {
  if (props.gameState === "menu") {
    if (props.char ==="chad") {
      return (
        <div>
          <div className="character-lore">
              <p className="smallfont" >Category: Nature</p>
              <p className="smallfont">Background:</p>
              <p>Love animals, plants, flowers, everything outside the room!</p>
          </div>
      </div>
    )
    } else {
      return (
        <div>
          <div className="character-lore">
              <p className="smallfont" >Category: Nerd Words</p>
              <p className="smallfont">Background:</p>
              <p>Stays inside all days, uses big words to try to impress chicks!</p>
          </div>
      </div>
    )
    }

  }
}

export default CharDetails