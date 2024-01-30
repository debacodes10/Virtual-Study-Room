import React, {useState} from 'react'
import { useRouter } from 'next/router';
import './styles/logincard.css'
import { FcGoogle } from "react-icons/fc";

import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider
    } from 'firebase/auth';
import app from '../../firebase';

const auth = getAuth(app);

const LoginCard = () => {

    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)

    const changeCard = () => {
        setLogin(!login)
        setRegister(!register)
        setEmail("")
        setPassword("")
    }

  const handleLogin = () => {
    //login email password code here
    signInWithEmailAndPassword(auth, email, password)
    .then((result)=> {
        router.push("/home")
    })
    .catch((error)=>{
        if (error.code==="auth/invalid-credential"){
            alert("Invalid credentials!")
        }
    })
  }

  const handleRegister = () => {
    //register email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then((result)=> {
        changeCard()
    }) 
  }

  const handleGoogleLogin = () => {
    //google login code
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
        router.push("/home")
    })
  }

  return (<>
    {login ? 
        <div className='loginCardContainer'>
        <span className='loginLabelText'>Login</span>
        <div>
            <span className='toRegisterLabel'>Don't have an account?</span>
            <button onClick={() => changeCard()}>
                <span className='toRegisterLinkLabel'>Sign Up</span>
            </button>
        </div>
        <div className='emailPwdContainer'>
            <span className='emailPwdLabel'>Email</span>
            <input 
            className='emailPwdInput'
            placeholder='you@example.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className='emailPwdContainer'>
            <span className='emailPwdLabel'>Password</span>
            <input 
            type='password'
            className='emailPwdInput'
            placeholder='Enter 6 characters or more'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <button className='loginBtnContainer' onClick={()=>handleLogin()}> 
            <span className='loginBtnLabel'>Login</span>
        </button>
        <div className='inBetweenLineContainer'>
            <div className='lineBetween'></div>
            <span className='orLoginWithLabel'>or Login with</span>
            <div className='lineBetween'></div>
        </div>
        <button className='googleSignInBtn' onClick={()=>handleGoogleLogin()}>
            <FcGoogle size={25}/>
            <span className='googleSignInBtnLabel'>Sign in with Google</span>
        </button>
    </div>
    : null}
    {register ? 
    <div className='loginCardContainer'>
        <span className='loginLabelText'>Register</span>
        <div>
            <span className='toRegisterLabel'>Already have an account?</span>
            <button onClick={() => changeCard()}>
                <span className='toRegisterLinkLabel'>Login</span>
            </button>
        </div>
        <div className='emailPwdContainer'>
            <span className='emailPwdLabel'>Email</span>
            <input 
            className='emailPwdInput'
            placeholder='you@example.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className='emailPwdContainer'>
            <span className='emailPwdLabel'>Password</span>
            <input 
            type='password'
            className='emailPwdInput'
            placeholder='Enter 6 characters or more'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <button className='loginBtnContainer' onClick={()=>handleRegister()}> 
            <span className='loginBtnLabel'>Register</span>
        </button>
        <div className='inBetweenLineContainer'>
            <div className='lineBetween'></div>
            <span className='orLoginWithLabel'>or Register with</span>
            <div className='lineBetween'></div>
        </div>
        <button className='googleSignInBtn' onClick={()=>handleGoogleLogin()}>
            <FcGoogle size={25}/>
            <span className='googleSignInBtnLabel'>Sign up with Google</span>
        </button>
    </div>
    : null }
    </>
  )
}

export default LoginCard