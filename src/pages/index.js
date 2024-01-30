'use state';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import './styles/index.css';

import LoginCard from '@/components/LoginCard';

const login = () => {

  const router = useRouter()

  return (
    <div className='mainIndexContainer'>
      <div className='primaryCardContainer'>
        <Image src={("/indexSideImage.png")} width={536} height={644} className='indexSideImage' priority alt=''/>
        <LoginCard />
      </div>
    </div>
  )
}

export default login