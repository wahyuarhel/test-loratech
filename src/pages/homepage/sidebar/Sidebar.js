import React from 'react'
import './Sidebar.scss'

export default function Sidebar() {
    return (
        <div className="sidebar_container">
            <h1>금융이 불편할 때, 언제였나요?</h1>
            <div className="input_comment">
                {/* <input type="textarea" placeholder="이럴 때 너무 불편해요" /> */}
                <textarea placeholder="이럴 때 너무 불편해요" wrap='on' />
                <div><button>남기기</button></div>
            </div>
            <div className="top_20">
                <h3>정말 많은 분들이 공감한 <br />불편함은 무엇일까요?</h3>
                <span>TOP 20 보기 &gt; </span>
            </div>
        </div>
    )
}
