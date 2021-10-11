import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './ChatBodyFooter.css'
import SendIcon from '@mui/icons-material/Send';

function ChatBodyFooter() {
    return (
        <div className="ChatBodyFooter__main">
            <div className="ChatBodyFooter__inputer__box">
                <div className="inputer"><input type="text" className="" placeholder="Type something..." /></div>
            </div>
            <div className="ChatBodyFooter__sender__box">
                <IconButton>
                    <SendIcon color="primary"/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatBodyFooter
