import React, {useRef, useState} from 'react'
import './styles/musicplayer.css';

import { IoPlay } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";


const MusicPlayer = () => {

  const audioRef = useRef()

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      console.log(error);
    }
  }

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      console.log(error)
    }
  }

  const updateProgress = () => {
    const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  return (
    <div className='musicMainContainer'>
        <span className='nowPlayingLabel'>Now Playing</span>
        <div className='musicTitleLabelContainer'>
          <select className='musicTitleSelectContainer'>
            <option value={"Ocean Waves"} className='optionMusicLabel'>Ocean Waves</option>
            <option value={"Rainy Day"} className='optionMusicLabel'>Rainy Day</option>
            <option value={"Chirping Crickets"} className='optionMusicLabel'>Chirping Crickets</option>
          </select>
        </div>
        <div className='musicImage'></div>
        <div className='musicPlayedContainer'>
        <div className='musicPlayedLength' style={{ width: `${progress}%` }}></div>
      </div>
        <button className='musicPlayBtnContainer'>
          {isPlaying ? 
          <IoPauseSharp size={30} color='#F9EFDB' onClick={pause} />
          : 
          <IoPlay size={30} color='#F9EFDB' onClick={play}/>
          }
          
        </button>
        <audio
        ref={audioRef}
        src='/ocean-waves.mp3'
        onTimeUpdate={updateProgress}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
          play()
        }}
        loop
      />
    </div>
  )
}

export default MusicPlayer