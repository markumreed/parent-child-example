import { useState } from 'react'
import ChildComponent from './ChildComponent.jsx'
import './App.css'


function ParentComponent() {
  const [message, setMessage] = useState("Initial Message");
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Parent</h1>
      <p>Message: {message}</p>
      <ChildComponent onUpdateMessage = {updateMessage}/>
    </div>
  )
}
function App() {
  

  return (
    <>
      <ParentComponent />
    </>
  )
}

export default App
