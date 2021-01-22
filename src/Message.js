import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"

function Message(props) {
    return (
        <div className="message">
            <Avatar />
            <div class="message__info">
                <h4>
                    UserName
                    <span className="message__timestamp">

                    </span>
                </h4>
            </div>
        </div>
    )
}

export default Message
