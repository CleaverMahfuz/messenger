import React from 'react'
import './Sidber.css'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CreateIcon from '@mui/icons-material/Create';
import { IconButton } from '@mui/material';

function Sidber() {
    return (
        <div className="sidebar__container__main">
            <div className="sidebar__container__header">
                <div className="sidebar__header" >
                    <div className="sidebar__header">
                        <div className="sidebar__avater__contianer">
                            <div><IconButton><Avatar /></IconButton> </div>
                            <div> <h3>Chats</h3> </div>
                        </div>
                        <div className="sidebar__profile__contianer">
                            <div><IconButton><MoreHorizIcon /> </IconButton></div>
                            <div><IconButton><VideoCallIcon /> </IconButton></div>
                            <div><IconButton><CreateIcon /></IconButton> </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar__header__search" >
                    <div className="sidebar__header__input">
                        <CreateIcon className="sidebar__header__search__icon"/>
                        <input type="text" placeholder="Search your friends to chat" />
                    </div>
                </div>
                <div className="sidebar__header__profile__container">
                    <div className="sidebar__header__self">
                        <div className="sidebar__header__username__contianer">
                            <div><Avatar /></div>
                            <div>
                                <div><strong><p>USER Name</p></strong></div>
                                <div><p>last messege</p></div>
                            </div>
                        </div>
                        <div className="sidebar__header__userLastSeenIcon" >
                            <div className="sidebar__header__userLastSeenIcon__round__hoever"><MoreHorizIcon /></div>
                            <div className="sidebar__header__userLastSeenIcon__image"><img src="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidber
