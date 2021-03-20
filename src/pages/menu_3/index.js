import React from 'react'
import './index.scss'

export default function Menu_3() {
    return (
        <div className="menu_3_container">
            <div className="sidebar_menu_3">
                <h1>불편했던 금융, <br />
                    이렇게 바꾸고 <br /> 있어요
                </h1>
                <p>
                    남겨주신 의견을 바탕으로 하나씩 개선하고 있습니다. 그동안 불편했던 금융 생활, 토스 덕분에 조금이라도 편해지셨으면 좋겠어요. 작은 불편함이든 큰 불편함이든, 금융이 불편한 순간이 생각나셨다면 꼭 의견을 남겨주세요. 토스가 할 수 있는 것이라면 모두 바꾸겠습니다.
                </p>
                <div className="card_1">
                    <div>
                        <p>
                            불편한 순간이
                            <br />
                            생각나셨다면
                            <br />
                            들려주세요
                        </p>
                    </div>
                    <div style={{ marginRight: "1rem" }}>
                        <img src="https://www.pinclipart.com/picdir/big/396-3968310_emoji-sad-png-crying-emoji-png-clipart.png" alt="sad" />
                    </div>
                </div>

                <div className="card_1">
                    <div>
                        <p>
                            매일 더 좋아지는 토스
                        <br />
                        지금 사용해보세요
                        </p>
                    </div>
                    <div >
                        <img src="https://static.toss.im/assets/homepage/moments/app-icon.png" alt="sad" style={{ width: "74px" }} />
                    </div>
                </div>

            </div>
            <div className="content_menu_3">
                <div className='card_menu_3' style={{ background: 'rgb(36, 61, 91)' }}>
                    <div className='card_menu_3_text'>
                        <div>
                            <img src="https://static.toss.im/assets/homepage/moments/icon-quotation.svg" alt="quote" style={{ marginBottom: '1rem' }} />
                            <h3>밤에 송금하면 점검 <br /> 시간에 꼭 걸려요</h3>
                        </div>
                        <div>
                            <button>자세히 보기</button>
                        </div>
                    </div>
                    <img className='phone_position' src="https://static.toss.im/assets/homepage/moments/ex6.png" alt="phone" />
                </div>

                <div className='card_menu_3' style={{ background: 'rgb(74, 71, 77)' }}>
                    <div className='card_menu_3_text'>
                        <div>
                            <img src="https://static.toss.im/assets/homepage/moments/icon-quotation.svg" alt="quote" style={{ marginBottom: '1rem' }} />
                            <h3>보이스피싱 때문에 <br /> 200만원 날린 적 <br /> 있어요</h3>
                        </div>
                        <div>
                            <button>자세히 보기</button>
                        </div>
                    </div>
                    <img className='phone_position' src="https://static.toss.im/assets/homepage/moments/ex7.png" alt="phone" />
                </div>

                <div className='card_menu_3' style={{ background: 'rgb(10, 82, 65)' }}>
                    <div className='card_menu_3_text'>
                        <div>
                            <img src="https://static.toss.im/assets/homepage/moments/icon-quotation.svg" alt="quote" style={{ marginBottom: '1rem' }} />
                            <h3>대출 금리 낮출 수 <br /> 있는 상황, 왜 은행은 <br /> 안 알려줄까요?</h3>
                        </div>
                        <div>
                            <button>자세히 보기</button>
                        </div>
                    </div>
                    <img className='phone_position' src="https://static.toss.im/assets/homepage/moments/ex1.png" alt="phone" />
                </div>

            </div>
        </div>
    )
}
