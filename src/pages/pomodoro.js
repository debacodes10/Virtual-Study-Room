import React, { useState } from 'react';
import Pomodro from '@/components/Pomodro';
import MusicPlayer from '@/components/MusicPlayer';
import { useRouter } from 'next/router';
import './styles/pomodoro.css';

import { IoMdArrowRoundBack } from 'react-icons/io';

const Pomodoro = () => {
  const [backgroundPath, setBackgroundPath] = useState('/ocean-waves-bg.jpg');
  const [labelColor, setLabelTextColor] = useState('#3C6E91');
  const router = useRouter();

  const handleBack = () => {
    router.back();
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

  const handleSongChange = (newSong) => {
    const newBackgroundPath = bgPath[newSong] || '/indexBg.jpeg';
    const newTextLabelColor = labelTextColor[newSong] || '#3C6E91';

    setBackgroundPath(newBackgroundPath);
    setLabelTextColor(newTextLabelColor);
  };

  return (
    <div className="mainPomodoroContainer" style={{ backgroundImage: `url(${backgroundPath})` }}>
      <div className="secondPomodoroContainer">
        <IoMdArrowRoundBack className="backBtn" style={{ color: `${labelColor}` }} 
        size={50} onClick={() => { handleBack() }} />
        <span className="pomodoroLabel" style={{ color: `${labelColor}` }}>
          Pomodoro Timer
        </span>
      </div>
      <div className="secondaryPomodoroContainer">
        <Pomodro />
        <MusicPlayer onSongChange={handleSongChange} />
      </div>
    </div>
  );
};

export default Pomodoro;
