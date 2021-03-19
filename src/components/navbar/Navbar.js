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
                    <div><a href="#">의견 남기기</a></div>
                    <div><a href="#">TOP 20</a></div>
                    <div><a href="#">실제 개선 사례</a></div>
                    <div><a href="#">캠페인 자세히 보기</a></div>
                </div>

            </div>
        </div>
    )
}
