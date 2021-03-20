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
                <h3>test</h3>
            </div>
        </div>
    )
}
