import React from 'react'
import './Main.scss'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

export default function Main() {
    return (
        <div className="main_container">
            <Sidebar />
            <Content />
        </div>
    )
}
