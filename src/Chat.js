import React, { useState } from 'react';
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";

function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (e)  => {
        e.preventDefault();

        //FireBase

        setInput("");
    }

    return (
        <div className="chat">
            {/*Chat header*/}
            <div className="chat_header">
                <h4>To: <span className="chat_name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>
            {/*Chat messages*/}
            <div className="chat_messages">
                <h2>I am a message</h2>
                <h2>I am a message</h2>
                <h2>I am a message</h2>
                <h2>I am a message</h2>
            </div>
            {/*{chat input}*/}
            <div className="chat_input">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)
                    }
                           placeholder="iMessage"
                           type="text"
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon classname="chat_mic"/>
                </IconButton>

            </div>
        </div>
    );
}

export default Chat;
