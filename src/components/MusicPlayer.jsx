import React from 'react'
import './styles/musicplayer.css';

import { IoPlay } from "react-icons/io5";


const MusicPlayer = () => {
  return (
    <div className='musicMainContainer'>
        <span className='nowPlayingLabel'>Now Playing</span>
        <div className='musicImage'></div>
        <div className='musicTitleLabelContainer'>
          <select className='musicTitleSelectContainer'>
            <option value={"Ocean Waves"} className='optionMusicLabel'>Ocean Waves</option>
            <option value={"Rainy Day"} className='optionMusicLabel'>Rainy Day</option>
            <option value={"Chirping Crickets"} className='optionMusicLabel'>Chirping Crickets</option>
          </select>
        </div>
        <button className='musicPlayBtnContainer'>
          <IoPlay size={40} color='#F9EFDB'/>
        </button>
    </div>
  )
}

export default MusicPlayer