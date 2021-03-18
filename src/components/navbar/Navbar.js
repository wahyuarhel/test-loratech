import React from 'react'
import './Navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_container">
                <div>
                    <a href="#"><img src="https://static.toss.im/icons/svg/logo-every-moment-white.svg" alt="logo" /></a>
                </div>
                <div>
                    <div><a href="#">Leave a commnet</a></div>
                    <div><a href="#">TOP 20</a></div>
                    <div><a href="#">Examples of actual improvement</a></div>
                    <div><a href="#">See campaign details</a></div>
                </div>

            </div>
        </div>
    )
}
