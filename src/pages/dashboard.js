import React, {useState} from 'react'
import './styles/dashboard.css'

import Image from 'next/image'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../../firebase';

import { IoMdChatbubbles } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { SlCamrecorder } from "react-icons/sl";
import { FaCalculator } from "react-icons/fa6";
import { FaMarker } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";

const auth = getAuth(app);

const dashboard = () => {

  const [user, setUser] = useState('')
  const [pfp, setPfp] = useState("/blank-pfp.png")

  onAuthStateChanged(auth,async(user) => {
    if (user) {
      if (user){
        if (user.photoURL){
            setPfp(user.photoURL)
        } else {
            setImg("/blank-pfp.png")
        }
        if (user.displayName){
            setUser(user.displayName)
        } else{
            setUser(user.email)
        }
    } else {
        setUser("Sign In")
    }
    }
  })

  return (
    <div className='mainDashboardContainer'>
        <div className='sideBar'>
          <div className='profileContainer'>
            <Image src={pfp} height={75} width={75} alt='' className='pfpImage' />
            <span className='profileNameLabel'>{user}</span>
          </div>
          <div className='separatorDiv'></div>
          <div className='optionsContainer'>
            <ol className='optionsList'>
              <li>
                <IoMdChatbubbles size={25} />
                <span className='optionsTextLabel'>Chat Rooms</span>
              </li>
              <li>
                <FaClock size={25} />
                <a href='/pomodoro'><span className='optionsTextLabel'>Pomodoro</span></a>
              </li>
              <li>
                <SlCamrecorder size={25} />
                <span className='optionsTextLabel'>Lecture Recorder</span>
              </li>
            </ol>
          </div>
          <div className='separatorDiv'></div>
          <div className='widgetContainer'>
            <span className='widgetLabel'>Widgets</span>
            <ol className='optionsList'>
              <li>
                <FaCalculator size={25} />
                <span className='optionsTextLabel'>Calculator</span>
              </li>
              <li>
                <FaMarker size={25} />
                <span className='optionsTextLabel'>Whiteboard</span>
              </li>
              <li>
                <FaStopwatch size={25} />
                <span className='optionsTextLabel'>Stopwatch</span>
              </li>
            </ol>
          </div>
        </div>
        <div className='mainDashboardArea'>
          <div className='toDoContainer'>
            <span className='subHeadingLabel'>My ToDo-s</span>

          </div>
          <div className='analyticsContainer'>
            <span className='subHeadingLabel'>My Stats</span>

          </div>
        </div>
    </div>
  )
}

export default dashboard