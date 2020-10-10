import React, { useState } from 'react';
import "./Chat.css";

function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (e)  => {
        e.preventDefault();

        //FireBase

        setInput("");
    }

    return (
        <div className="chat">
            {/*{chat header}*/}
            <div className="chat_header">
                <h4>To: <span className="chat_name">Channel Name</span> </h4>
                <strong>Details</strong>
            </div>
            {/*{chat messages}*/}

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
            </div>
        </div>
    );
}

export default Chat;
