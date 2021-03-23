import React from 'react'
import './index.scss'

export default function Login() {
    return (
        <div className='login_container'>
            <div className='login_box'>
                <div className='login_side_left'>
                    <img src="https://static.toss.im/icons/svg/logo-every-moment-white.svg" alt="logo" />
                </div>
                <div className='login_side_right'>
                    <input type="email" placeholder='username' />
                    <input type="password" placeholder='password' />
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
    )
}
