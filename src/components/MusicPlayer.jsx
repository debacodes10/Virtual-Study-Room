import React, {useRef, useState} from 'react'
import './styles/musicplayer.css';

import { IoPlay } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";


const MusicPlayer = ({ onSongChange }) => {

  const audioRef = useRef()

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0);
  const [selectedSong, setSelectedSong] = useState('Ocean Waves');
  const [musicImage, setMusicImage] = useState("/ocean-waves-bg.jpg")
  const [labelColor, setLabelTextColor] = useState('#3C6E91');

  const selectValue = ['Ocean Waves', 'Rainy Day', 'Chirping Crickets'];
  const musicPath = {
    'Ocean Waves': '/sea-waves.wav',
    'Rainy Day': '/rain_and_thunder.wav',
    'Chirping Crickets': '/chirping-crickets.mp3',
  };

  const bgPath = {
    'Ocean Waves': '/ocean-waves-bg.jpg',
    'Rainy Day': '/rainy-day-bg.jpg',
    'Chirping Crickets': '/chirping-crickets-bg.jpg',
  };
  const labelTextColor = {
    'Ocean Waves': '#3C6E91',
    'Rainy Day': '#55617A',
    'Chirping Crickets': '#CCC',
  };

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

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSong(selectedOption);
    audioRef.current.src = musicPath[selectedOption];
    const musicBg = bgPath[selectedOption] || "/indexBg.jpeg";
    const newTextLabelColor = labelTextColor[selectedOption] || '#3C6E91';
    // Optionally, you may want to pause and reset progress when changing the song
    pause();
    setProgress(0);
    // console.log(selectedSong);
    onSongChange(selectedOption);
    setMusicImage(musicBg);
    setLabelTextColor(newTextLabelColor);
  };

  return (
    <div className='musicMainContainer'>
        <span className='nowPlayingLabel' style={{color: `${labelColor}`}}>Now Playing</span>
        <div className='musicTitleLabelContainer'>
          <select
          className='musicTitleSelectContainer'
          onChange={handleSelectChange}
          value={selectedSong}
          style={{color: `${labelColor}`}}
        >
          {selectValue.map((option) => (
            <option key={option} value={option} className='optionMusicLabel'>
              {option}
            </option>
          ))}
        </select>
        </div>
        <div className='musicImageParent'>
          <div className='musicImage' style={{backgroundImage: `url(${musicImage})`}}></div>
        </div>
        <div className='musicPlayedContainer'>
        <div className='musicPlayedLength' style={{ width: `${progress}%` }}></div>
      </div>
          {isPlaying ? 
          <button className='musicPlayBtnContainer' onClick={pause} >
          <IoPauseSharp size={30} color='#F9EFDB'/> </button>
          : 
          <button className='musicPlayBtnContainer' onClick={play}>
          <IoPlay size={30} color='#F9EFDB'/> </button>
          }
        <audio
        ref={audioRef}
        src={musicPath[selectedSong]}
        onTimeUpdate={updateProgress}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
          play();
        }}
        loop
      />
    </div>
  )
}

export default MusicPlayer;