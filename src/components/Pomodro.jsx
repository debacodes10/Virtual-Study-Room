// PomodoroTimer.js
import { useState, useEffect } from 'react';
import './styles/pomodro.css';

const Pomodro = () => {

    const [initTime, setInitTime] = useState(0)
    const [time, setTime] = useState(25*60)

    const handleSetTime = () => {
        setInitTime(time)
        setTime(time)
    } //code to set time for pomodoro as input by user

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime>0?prevTime-1:0));
        }, 1000);
        // calculateProgress()

        return () => clearInterval(interval);
    })

    const calculateProgress = () => {
        const percent = (time/(25*60))*100;
        return percent
    }

    const rotationStyle = {
        transform: `translate(-50%, -100%) rotate(${calculateProgress() * 3.6}deg)`,
    };

  return (
    <div className="pomodroMainContainer">
      <div>
        <p className='timerCountdownLabel'>Time left: {Math.floor(time/60)}:{Math.floor(time%60).toString().padStart(2, '0')}</p>
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
