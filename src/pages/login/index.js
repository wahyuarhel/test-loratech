import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
import * as ActionLogin from '../../redux/LoginAction'
import { useSelector, useDispatch } from 'react-redux'
// import { set } from 'js-cookie'

const Login = () => {

    const disptach = useDispatch()
    const login = useSelector((state) => state.LoginReducer.login)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const body = {
            "email": email,
            "password": password
        }
        disptach(ActionLogin.postLogin(body))
    }

    const history = useHistory()
    useEffect(() => {
        history.push('/')
    }, [login])


    return (
        <div className='login_container'>
            <div className='login_box'>
                <div className='login_side_left'>
                    <img src="https://static.toss.im/icons/svg/logo-every-moment-white.svg" alt="logo" />
                </div>
                <div className='login_side_right'>
                    <form id='myForm' onSubmit={handleLogin}>
                        <input type="email" placeholder='email' name='email' value={email} onChange={handleEmail} />
                        <input type="password" placeholder='password' name='password' value={password} onChange={handlePassword} />
                        <button type='submit'>LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login