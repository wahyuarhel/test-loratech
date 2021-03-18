import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <div className="footer_container">
            <div>
                <div>
                    <ul>
                        <p>service</p>
                        <li>Notice</li>
                        <li>Frequently Asked</li>
                        <li>Questions</li>
                        <li>Joint certificate</li>
                        <li>management</li>
                        <li>Account lockout</li>
                        <li>Customer Protection</li>
                        <li>Center</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>company</p>
                        <li>About Us</li>
                        <li>Tospayments</li>
                        <li>Toss Insurance</li>
                        <li>Hire</li>
                        <li>blog</li>
                        <li>Announcement</li>
                    </ul>

                </div>
                <div>
                    <ul>
                        <p>question</p>
                        <li>Business alliance</li>
                        <li>Inquiry about</li>
                        <li>certification business?</li>
                        <li>Marketing - Pr</li>
                        <li>IR</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>
                            Service center
                        </p>
                        <li>Phone: 1599-4905 (24 hours a day, 7 days a week)</li>
                        <li>Email: support@toss.im</li>
                        <li>KakaoTalk: @toss</li>
                    </ul>
                </div>
            </div>
            <div className="footer_address">
                <div>
                    <span>Viva Republica Co., Ltd.</span>
                    <p>Business Registration Number: 120-88-01280 | Representative: Seung-
Geon Lee 06236, 12th floor, 142 Teheran-ro, Gangnam-gu, Seoul (Yeoksam-dong, Ark Place)</p>
                </div>
            </div>
            <div className="contact_link">
                <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="fb" />
                <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt='B' />
                <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="N" />
                <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="twitter" />
                <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="ig" />
            </div>
        </div>
    )
}
