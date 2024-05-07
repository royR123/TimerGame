import { useState } from 'react'
import './App.css'
import Players from './components/Players.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {


    return (
      <>
        <Players />
        <div id="challenges"></div>
        <TimerChallenge title= 'Easy' targetTime={1}/>
        <TimerChallenge title= 'Not Easy' targetTime={5}/>
        <TimerChallenge title= 'Getting Tough' targetTime={10}/>
        <TimerChallenge title= 'Tough' targetTime={15}/>
      </>
    );
}

export default App
