import React from 'react';

function ChildComponent({onUpdateMessage}) {
    const sendMessage = () => {
      onUpdateMessage("Here is the Child")
    }

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={sendMessage}>Update</button>
        </div>
    )
}

export default ChildComponent