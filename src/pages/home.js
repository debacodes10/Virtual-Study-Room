import React from 'react'
import { useRouter } from 'next/router'
import './styles/home.css'
import { FaPen } from "react-icons/fa";
import Image from 'next/image';

import { signOut, getAuth } from 'firebase/auth'
import app from '../../firebase'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

const auth = getAuth(app)

const home = () => {

    const router = useRouter()

    const handleSignOut = () => {
        signOut(auth)
        .then(
            router.push("/")
        )
    }

  return (
    <div className='homeContainer'>
        <Navbar />
        <div className='topLevelHomeContainer'>
          <span className='labelTextTired'>TIRED OF <br />STUDYING ALONE?</span>
          <div className='listLabelContainer'>
            <div className='rowListContainer'>
              <FaPen size={25}/>
              <span className='listLabel'>Find new study buddies!</span>
            </div>
            <div className='rowListContainer'>
              <FaPen size={25}/>
              <span className='listLabel'>Interact with students all across the world!</span>
            </div>
            <div className='rowListContainer'>
              <FaPen size={25}/>
              <span className='listLabel'>Attend free workshops!</span>
            </div>
            <div className='rowListContainer'>
              <FaPen size={25}/>
              <span className='listLabel'>Learn, explore & read!</span>
            </div>
          </div>
          {/* absolute divs */}
          <div className='cloudAbsolute'>
          <svg xmlns="http://www.w3.org/2000/svg" width="925" height="919" viewBox="0 0 925 919" fill="none">
            <path d="M781.784 929.429C879.217 930.772 973.909 1094.75 1043.55 1041.44C1113.2 988.126 1152.91 915.068 1153.97 838.334L1162.52 218.349C1163.38 159.2 1137.37 101.615 1089.18 55.9872C1040.99 10.3589 976.724 10.667 902.649 0.494903C832.109 0.501374 738.733 0.509931 685.214 0.514836C620.865 30.689 572.481 78.0572 548.793 134.072C503.239 123.925 455.134 123.626 409.548 133.206C363.962 142.786 322.582 161.891 289.769 188.507C256.956 215.123 233.924 248.266 223.1 284.442C212.276 320.619 214.06 358.49 228.266 394.066C143.198 421.245 74.3879 472.646 35.4431 538.103C-3.50167 603.56 -9.74583 678.308 17.9454 747.566C45.6366 816.823 105.247 875.548 184.989 912.126C264.731 948.705 358.798 960.475 448.589 945.108C471.207 945.106 523.03 913.579 582.344 945.096C642.734 945.091 710.457 928.464 781.784 929.429Z" fill="#F8F8F8"/>
          </svg>
          </div>
          <div className='girlAbsolute'>
            <Image src={("/studying-girl.png")} priority height={475} width={475} alt='' />
          </div>
          {/* absolute divs */}
          <button className='getStartedBtn'>
            <span className='getStartedLabel'>Get Started</span>
          </button>
        </div>
        <div className='secondLevelHomeContainer'>
          <div className='gridContainer'>
            <Image src={("/grid1.png")} alt='' height={400} width={600} className='gridImgs'/>
            <span className='gridImgLabel'>Create your own Study Room with Your Buddies for an interactive learning experience.</span>
          </div>
          <div className='gridContainer'>
            <Image src={("/grid2.png")} alt='' height={400} width={600} className='gridImgs'/>
            <span className='gridImgLabel'>Set Timers to keep track of your schedules.</span>
          </div>
          <div className='gridContainer'>
            <Image src={("/grid3.png")} alt='' height={400} width={600} className='gridImgs'/>
            <span className='gridImgLabel'>Unleash the Web Calculator advantage anytime.</span>
          </div>
          <div className='gridContainer'>
            <Image src={("/grid4.png")} alt='' height={400} width={600} className='gridImgs'/>
            <span className='gridImgLabel'>Use the free Translators for building an inclusive environment.</span>
          </div>
        </div>
        <Footer />
    </div>
  )
  }

export default home