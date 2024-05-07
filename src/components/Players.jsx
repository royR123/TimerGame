import React, { useRef, useState } from 'react'

function Players() {
    const [enteredPlayerName , setEnteredPlayerName] = useState(null);
    // const [submitted , setSubmitted] = useState(false);
    const playerName = useRef();
    const handleClick = () =>{
        setEnteredPlayerName(playerName.current.value);
    }
    // const handleChange = (e) =>{
    //     setEnteredPlayerName(e.target.value);
    // }
    return (
        <section id="player">
          <h2>Welcome {enteredPlayerName ? enteredPlayerName : "Unknown Player"}</h2>
          <p>
            <input
             ref={playerName} 
             type="text" 
            />
            <button onClick={handleClick}>Set Name</button>
          </p>
        </section>
      );
}

export default Players