import React, { useEffect } from 'react'
import '@fortawesome/fontawesome-free'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Navbar() {

    const [scroll, setScroll] = useState(false)
    const shadowEffect = () => {
        (window.scrollY > 10) ? setScroll(true) : setScroll(false)
    }

    window.addEventListener('scroll', shadowEffect)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        })
    }

    const isAuth = useSelector((state) => state.LoginReducer.token)
    const login = useSelector((state) => state.LoginReducer.login)

    const logout = async () => {
        await
            localStorage.removeItem('token')
        window.location = '/'
        alert('Thank you for using this website')
    }

    const history = useHistory()
    useEffect(() => {
        history.push('/')
    }, [login, history])

    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={scroll ? 'navbar active' : 'navbar'}>
            <div className="navbar_container">
                <div>
                    <Link to="/" onClick={scrollToTop}>
                        <img src="https://static.toss.im/icons/svg/logo-every-moment-white.svg" alt="" />
                    </Link>
                </div>

                <ul className={menuOpen ? 'active' : null}>
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
                    {isAuth !== null || login !== null ?

                        <li>
                            <Link to='/' onClick={logout}>
                                LOGOUT
                    </Link>
                        </li> : null
                    }
                </ul>
                <div onClick={handleMenu} className='menu_bar'><AiOutlineMenu /></div>

            </div>
        </div>
    )
}
