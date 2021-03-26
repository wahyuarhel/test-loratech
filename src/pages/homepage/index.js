import React from 'react'
import './index.scss'

export default function Main() {

    var comfyText = (function () {
        var tag = document.querySelectorAll('textarea')
        for (var i = 0; i < tag.length; i++) {
            tag[i].addEventListener('paste', autoExpand)
            tag[i].addEventListener('input', autoExpand)
            tag[i].addEventListener('keyup', autoExpand)
        }
        function autoExpand(e, el) {
            // eslint-disable-next-line
            var el = el || e.target
            el.style.height = 'inherit'
            el.style.height = el.scrollHeight + 'px'
        }
        window.addEventListener('load', expandAll)
        window.addEventListener('resize', expandAll)
        function expandAll(e) {
            var tag = document.querySelectorAll('textarea')
            for (var i = 0; i < tag.length; i++) {
                autoExpand(e, tag[i])
            }
        }
    })()

    console.log(comfyText)

    return (
        <div className="main_container">
            <div className="sidebar_container">
                <h1>금융이 불편할 때, 언제였나요?</h1>
                <div className="input_comment">
                    <textarea placeholder="이럴 때 너무 불편해요" wrap='on' />
                    <div><button>남기기</button></div>
                </div>
                <div className="top_20">
                    <h3>정말 많은 분들이 공감한 <br />불편함은 무엇일까요?</h3>
                    <span>TOP 20 보기 &gt; </span>
                </div>
            </div>

            <div className="content_container">
                <div className="card_container">
                    <ul>
                        <li>
                            <div className="blue_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-loudly-crying-face.svg" alt="sad" />
                                    <label>6,339번째 불편함</label>
                                </div>
                                <p>거래중지된 계좌에서 잔액이 남아있는데 중지되서 받을수도없구 송금버튼도없음</p>
                            </div>
                        </li>
                        <li>
                            <div className="green_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-face-with-steam-from-nose.svg" alt="angry" />
                                    <label>5,708</label>
                                </div>
                                <p>보유한 주식 채권 등과 예적금 등을 한곳에 모아보고 싶은데 다 분리되어 있으니 어플 왔다갔다 불편해요</p>
                            </div>
                        </li>
                        <li>
                            <div className="grey_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-pile-of-poo.svg" alt="shit" />
                                    <label>4,884번째 불편함</label>
                                </div>
                                <p>자동이체를 깜박 까먹었을때 미리 알림 서비스가 있었으면</p>
                            </div>
                        </li>
                        <li>
                            <div className="brown_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-skull-and-crossbones.svg" alt="skeleton" />
                                    <label>6,339번째 불편함</label>
                                </div>
                                <p>거래중지된 계좌에서 잔액이 남아있는데 중지되서 받을수도없구 송금버튼도없음</p>
                            </div>
                        </li>
                        <li>
                            <div className="blue_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-loudly-crying-face.svg" alt="sad" />
                                    <label>6,339번째 불편함</label>
                                </div>
                                <p>거래중지된 계좌에서 잔액이 남아있는데 중지되서 받을수도없구 송금버튼도없음</p>
                            </div>
                        </li>
                        <li>
                            <div className="green_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-face-with-steam-from-nose.svg" alt="angry" />
                                    <label>5,708</label>
                                </div>
                                <p>보유한 주식 채권 등과 예적금 등을 한곳에 모아보고 싶은데 다 분리되어 있으니 어플 왔다갔다 불편해요</p>
                            </div>
                        </li>
                        <li>
                            <div className="grey_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-pile-of-poo.svg" alt="shit" />
                                    <label>4,884번째 불편함</label>
                                </div>
                                <p>자동이체를 깜박 까먹었을때 미리 알림 서비스가 있었으면</p>
                            </div>
                        </li>
                        <li>
                            <div className="brown_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-skull-and-crossbones.svg" alt="skeleton" />
                                    <label>6,339번째 불편함</label>
                                </div>
                                <p>거래중지된 계좌에서 잔액이 남아있는데 중지되서 받을수도없구 송금버튼도없음</p>
                            </div>
                        </li>
                        <li>
                            <div className="blue_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-loudly-crying-face.svg" alt="sad" />
                                    <label>6,339번째 불편함</label>
                                </div>
                                <p>거래중지된 계좌에서 잔액이 남아있는데 중지되서 받을수도없구 송금버튼도없음</p>
                            </div>
                        </li>
                        <li>
                            <div className="green_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-face-with-steam-from-nose.svg" alt="angry" />
                                    <label>5,708</label>
                                </div>
                                <p>보유한 주식 채권 등과 예적금 등을 한곳에 모아보고 싶은데 다 분리되어 있으니 어플 왔다갔다 불편해요</p>
                            </div>
                        </li>
                        <li>
                            <div className="grey_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-pile-of-poo.svg" alt="shit" />
                                    <label>4,884번째 불편함</label>
                                </div>
                                <p>자동이체를 깜박 까먹었을때 미리 알림 서비스가 있었으면</p>
                            </div>
                        </li>
                        <li>
                            <div className="brown_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-skull-and-crossbones.svg" alt="skeleton" />
                                    <label>6,339번째 불편함</label>
                                </div>
                                <p>거래중지된 계좌에서 잔액이 남아있는데 중지되서 받을수도없구 송금버튼도없음</p>
                            </div>
                        </li>
                        <li>
                            <div className="blue_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-loudly-crying-face.svg" alt="sad" />
                                    <label>6,339번째 불편함</label>
                                </div>
                                <p>거래중지된 계좌에서 잔액이 남아있는데 중지되서 받을수도없구 송금버튼도없음</p>
                            </div>
                        </li>
                        <li>
                            <div className="green_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-face-with-steam-from-nose.svg" alt="angry" />
                                    <label>5,708</label>
                                </div>
                                <p>보유한 주식 채권 등과 예적금 등을 한곳에 모아보고 싶은데 다 분리되어 있으니 어플 왔다갔다 불편해요</p>
                            </div>
                        </li>
                        <li>
                            <div className="grey_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-pile-of-poo.svg" alt="shit" />
                                    <label>4,884번째 불편함</label>
                                </div>
                                <p>자동이체를 깜박 까먹었을때 미리 알림 서비스가 있었으면</p>
                            </div>
                        </li>
                        <li>
                            <div className="brown_card">
                                <div >
                                    <img src="https://static.toss.im/icons/svg/icn-emoji-skull-and-crossbones.svg" alt="skeleton" />
                                    <label>6,339번째 불편함</label>
                                </div>
                                <p>거래중지된 계좌에서 잔액이 남아있는데 중지되서 받을수도없구 송금버튼도없음</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
