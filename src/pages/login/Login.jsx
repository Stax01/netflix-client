import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import './login.scss'
import { fethcSignIn } from '../../store/auth/userActionCreators'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch()
    const handleSignIn = () => {
        let postData = {
            email,
            password
        }
        
        dispatch(fethcSignIn(postData))
        
    }
   
    
    return (
        <div className='login'>
            <div className="logo" >
                <img className='logo' src="/img/logo.png" alt=""  onClick={()=> history.push('/register')}/>
            </div>
            <div className="container">
                <div className="wrapper">
                    <div className="title">Sign in</div>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        value={email}
                        placeholder='Email' />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        value={password}
                        placeholder='Password' />
                    <button onClick={handleSignIn}>Sign in</button>
                    <div className='bottomInfo'>New to Netflix? <span>Sign up now.</span> </div>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
