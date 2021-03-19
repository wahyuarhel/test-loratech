import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <div className="footer_container">
            <div>
                <div>
                    <ul>
                        <p>서비스</p>
                        <li>공지사항</li>
                        <li>자주 묻는 질문</li>
                        <li>공동인증서 관리</li>
                        <li>계정 일시잠금</li>
                        <li>고객보호센터</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>회사</p>
                        <li>회사 소개</li>
                        <li>토스페이먼츠</li>
                        <li>토스인슈어런스</li>
                        <li>채용</li>
                        <li>블로그</li>
                        <li>공고</li>
                    </ul>

                </div>
                <div>
                    <ul>
                        <p>문의</p>
                        <li>사업 제휴</li>
                        <li>인증 사업 문의</li>
                        <li>마케팅 · PR</li>
                        <li>IR</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>고객센터</p>
                        <li>전화: 1599-4905(24시간 연중무휴)</li>
                        <li>이메일: support@toss.im</li>
                        <li>카카오톡: @toss</li>
                    </ul>
                </div>
            </div>
            <div className="footer_address">
                <div>
                    <span>(주)비바리퍼블리카</span>
                    <p>사업자 등록번호 : 120-88-01280 | 대표 : 이승건
                        <br />
                        06236 서울특별시 강남구 테헤란로 142, 12층 (역삼동, 아크플레이스)</p>
                </div>
            </div>
            <div className="footer_list">
                <ul>
                    <li>서비스 이용약관</li>
                    <li>통합 금융정보 서비스 약관</li>
                    <li>이용자의 권리 및 유의사항</li>
                    <li>개인정보 처리방침</li>
                    <li>위치기반서비스 이용약관</li>
                    <li>가맹점 고지사항</li>
                </ul>
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
