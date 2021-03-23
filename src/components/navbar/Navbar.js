import React from 'react'
import '@fortawesome/fontawesome-free'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useState } from 'react'

export default function Navbar() {

    const [scroll, setScroll] = useState(false)
    const shadowEffect = () => {
        (window.scrollY > 50) ? setScroll(true) : setScroll(false)
    }

    window.addEventListener('scroll', shadowEffect)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        })
    }
    return (
        <div className={scroll ? 'navbar active' : 'navbar'}>
            <div className="navbar_container">
                <Link to="/" onClick={scrollToTop}>
                    <img src="https://static.toss.im/icons/svg/logo-every-moment-white.svg" alt="" />
                </Link>
                <button><FaBars /></button>

                <ul>
                    <li>
                        <Link to='/' onClick={scrollToTop}>의견 남기기
                        </Link>
                    </li>
                    <li>
                        <Link to='/menu_2' onClick={scrollToTop}>
                            TOP 20
                    </Link>
                    </li>
                    <li>
                        <Link to='/menu_3' onClick={scrollToTop}>
                            실제 개선 사례
                    </Link>
                    </li>
                    <li>
                        <Link to='/menu_4' onClick={scrollToTop}>
                            캠페인 자세히 보기
                    </Link>
                    </li>
                </ul>
                {/* <div>
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
 */}
                <img src="" alt="" />
            </div>
        </div>
    )
}
