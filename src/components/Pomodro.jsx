// PomodoroTimer.js
import { useState, useEffect, useRef } from 'react';
import './styles/pomodro.css';

import { GiHamburgerMenu } from "react-icons/gi";
import { IoPauseSharp, IoPlay } from "react-icons/io5";

const Pomodro = () => {

    const [initTime, setInitTime] = useState(0);
    const [time, setTime] = useState(25 * 60);
    const [inputTime, setInputTime] = useState("25");
    const [menuVisible, setMenuVisible] = useState(true);
    const [isPaused, setIsPaused] = useState(false); 
    const [timerStarted, setTimerStarted] = useState(false); 

    const intervalRef = useRef(null);

    const handleReset = () => {
        setInitTime(0);
        setTime(25*60);
        setInputTime("25");
        setIsPaused(false);
        setTimerStarted(false);

        // Reset the timer to the initial position
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    const handlePauseTimer = () => {
        setIsPaused(!isPaused);
    }

    const handleMenuVisibility = () => {
        setMenuVisible(!menuVisible)
    }

    const handleInputChange = (e) => {
        setInputTime(e.target.value);
    }

    const handleSubmit = () => {
        const newTime = parseInt(inputTime, 10) * 60; // Convert input to seconds
        setInitTime(newTime);
        setTime(newTime);
        setTimerStarted(true); // Set timer started to true
    }

    useEffect(() => {
        let interval;

        if (timerStarted && !isPaused) {
            interval = setInterval(() => {
                setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [timerStarted, isPaused]);

    const calculateProgress = () => {
        const percent = ((initTime - time) / initTime) * 100;
        return percent;
    }

    const rotationStyle = {
        transform: `translate(-50%, -100%) rotate(${calculateProgress() * 3.6}deg)`,
    };

    return (
        <div className="pomodroMainContainer">
            <div className='menuBtnContainer'>
                <button onClick={() => handleMenuVisibility()}>
                    <GiHamburgerMenu size={30} className='menuBtn' color='#252525'/>
                </button>
                {menuVisible ?
                    <div className='pomodroMenuContainer'>
                        <input
                            type='number'
                            value={inputTime}
                            onChange={handleInputChange}
                            className='timeInputContainer'
                        />
                        <button className="pauseBtnContainer" onClick={() => { handlePauseTimer() }}>

                            {isPaused ?
                                <IoPlay size={35} color='#252525' />
                                :
                                <IoPauseSharp size={35} color='#252525' />
                            }
                        </button>
                        <button className="timeSubmitBtn" onClick={handleSubmit}>
                            <span className='timeSubmitBtnLabel'>Start</span>
                        </button>
                        <button className="timeSubmitBtn" onClick={handleReset}>
                            <span className='timeSubmitBtnLabel'>Reset</span>
                        </button>
                    </div>
                    : null}
            </div>
            <div>
                <p className='timerCountdownLabel'>Time left: {Math.floor(time / 60).toString().padStart(2, '0')}:{Math.floor(time % 60).toString().padStart(2, '0')}</p>
            </div>
            <div className='circularTimer'>
                <div className='countdown' style={{ background: `conic-gradient(#FEEE63 ${calculateProgress()}%, transparent ${calculateProgress()}%)` }}>
                    <div className='indicator' style={rotationStyle}></div>
                </div>
            </div>
        </div>
    );
};

export default Pomodro;
