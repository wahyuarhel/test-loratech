import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useState } from 'react'

export default function Navbar() {

    const [scroll, setScroll] = useState(false)
    const shadowEffect = () => {
        (window.scrollY > 5) ? setScroll(true) : setScroll(false)
    }

    window.addEventListener('scroll', shadowEffect)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className={scroll ? 'navbar active' : 'navbar'}>
            <div className="navbar_container">
                <div>
                    <Link to="/" onClick={scrollToTop}>
                        <img src="https://static.toss.im/icons/svg/logo-every-moment-white.svg" alt="logo" />
                    </Link>
                </div>
                <div>
                    <Link to='/' onClick={scrollToTop}>
                        <div>의견 남기기</div>
                    </Link>
                    <Link to='/menu_2' onClick={scrollToTop}>
                        <div>TOP 20</div>
                    </Link>
                    <Link to='/menu_3' onClick={scrollToTop}>
                        <div>실제 개선 사례</div>
                    </Link>
                    <Link to='/menu_4' onClick={scrollToTop}>
                        <div>캠페인 자세히 보기</div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
