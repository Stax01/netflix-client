import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { fetchRegister } from '../../store/auth/userActionCreators';

import './register.scss'

const Register = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isReadyEmail, setIsReadyEmail] = React.useState(false)
    const history = useHistory()
    const  dispatch = useDispatch()
    const handleEmail = () => {
        console.log(email)
        setIsReadyEmail(true)
    }
    const handlePassword = () => {
        let postData = {
            email,
            password
        }

        dispatch(fetchRegister(postData))
        setIsReadyEmail(false)
        history.push('/login')
    }
    return (
        <div className='register'>
            <div className="top">
              
                    <img className='logo' src="/img/logo.png" alt="" />
                <button  onClick={()=> history.push('/login')}>
                   Sign in 
                </button>
               
                
            </div>
            <div className="content">

                <h1>Unlimited movies, TV <br /> shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <span>Ready to watch? Enter your email to create or restart your membership.</span>
                {!isReadyEmail ? (<div className='bottom'>
                    <input
                        onChange={(e) => setEmail(e.currentTarget.value)} value={email}
                        type="email"
                        placeholder='Email address'
                    />
                    <button onClick={handleEmail}>Get started</button>
                </div>
                ) : (
                    <div className='bottom'>
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            value={password}
                        />
                        <button onClick={handlePassword}>Start</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Register
