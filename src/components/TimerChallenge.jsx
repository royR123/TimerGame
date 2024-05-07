import React, { useState , useRef} from 'react'
import ResultModal from './ResultModal';

function TimerChallenge({ title , targetTime}) {
    const [timerStarted , setTimerStarted] = useState(false);
    const [timerExpired , setTimerExpired] = useState(false);
    const timer = useRef();
    const dialog = useRef();
    function handleStart(){
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        },targetTime*1000)
        setTimerStarted(true);
    }
    function handleStop(){
        clearTimeout(timer.current);
        setTimerStarted(false);
        console.log("timer is stoped" , timer)
    }

    return (
        <>

        <ResultModal ref = {dialog} targetTime={targetTime} result='lost'/>
        <section className='challenge'> 
            <h2>
                {title}
            </h2>
            {timerExpired && <p>You Lost!</p>}
            <p className='challenge-time' >
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? "Stop" : "Start"}
            </button>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? "Timer is running" : "Timer inactive"}
            </p>
        </section>

        </>
    )
}

export default TimerChallenge