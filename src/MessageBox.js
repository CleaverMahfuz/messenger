import React from 'react'
import './MessageBox.css'
import Sidber from './Sidber'
import ChatBox from './ChatBox'


function MessageBox() {
    return (
        <div className="messenger__box">
            <div className="message__sidebar">
                <Sidber/>
            </div>
            <div className="message__box">
                <ChatBox />
            </div>
        </div>
    )
}

export default MessageBox
