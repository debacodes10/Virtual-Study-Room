import React, { useState } from 'react'
import './styles/navbar.css'
import Image from 'next/image'
import { IoMdSettings } from "react-icons/io";
import { useRouter } from 'next/router';
import app from '../../firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const auth = getAuth(app)

const Navbar = () => {

    const router = useRouter();

    const [user, setUser] = useState('')
    const [img, setImg] = useState("/blank-pfp.png");
    const [imgBool, setImgBool] = useState(false)

    onAuthStateChanged (auth, async(user) => {
        if (user){
            if (user.photoURL){
                setImg(user.photoURL)
                setImgBool(true)
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
        
    })

    const handlePomodoro = () => {
        router.push("/pomodoro")
    }

    const handleSignIn = () => {
        router.push("/")
    }

    const handleLogout = () => {
        signOut(auth)
        .then(
            router.push("/")
        )
    }

    const handleDashboardBtn = () => {
        router.push("/dashboard")
    }

  return (
    <div className='navbarContainer'>
        <button className='navbarLabelBtn'>
            <Image src={img} height={40} width={40} alt='' className='pfpContainer' />            
        </button>
        <button className='navbarLabelBtn'><span className='navbarLabel'>Profile</span></button>
        <button className='navbarLabelBtn' onClick={()=>handleSignIn()}><span className='navbarLabel'>{user}</span></button>
        <button className='navbarLabelBtn' onClick={()=>{handleDashboardBtn()}}><div className='liveLabelContainer'> 
            <span className='liveLabel'>Dashboard</span>
        </div></button>
        <button className='navbarLabelBtn' onClick={()=>handleLogout()}><span className='navbarLabel'>Log Out</span></button>
        <button className='navbarLabelBtn'><span className='navbarLabel'>About</span></button>
        <button className='navbarLabelBtn' onClick={()=>handlePomodoro()}><span className='navbarLabel'>Pomodoro</span></button>
        <button className='navbarLabelBtn'><IoMdSettings size={40}/></button>
    </div>
  )
}

export default Navbar