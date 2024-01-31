import React from 'react'
import Pomodro from '@/components/Pomodro'
import MusicPlayer from '@/components/MusicPlayer'
import { useRouter } from 'next/router'
import './styles/pomodoro.css'

import { IoMdArrowRoundBack } from "react-icons/io";

const pomodoro = () => {

  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='mainPomodoroContainer'>
        <IoMdArrowRoundBack className="backBtn" size={50} onClick={() => {handleBack()}} />
        <span className='pomodoroLabel'>Pomodoro Timer</span>
        <div className='secondaryPomodoroContainer'>
            <Pomodro />
            <MusicPlayer />
        </div>
    </div>
  )
}

export default pomodoro