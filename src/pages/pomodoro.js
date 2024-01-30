import React from 'react'
import Pomodro from '@/components/Pomodro'
import MusicPlayer from '@/components/MusicPlayer'
import './styles/pomodoro.css'

const pomodoro = () => {
  return (
    <div className='mainPomodoroContainer'>
        <span className='pomodoroLabel'>Pomodoro Timer</span>
        <div className='secondaryPomodoroContainer'>
            <Pomodro />
            <MusicPlayer />
        </div>
    </div>
  )
}

export default pomodoro