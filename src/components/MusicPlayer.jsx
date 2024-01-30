import React from 'react'
import './styles/musicplayer.css';

const MusicPlayer = () => {
  return (
    <div className='musicMainContainer'>
        <span className='nowPlayingLabel'>Now Playing</span>
        <div className='musicImage'></div>
    </div>
  )
}

export default MusicPlayer