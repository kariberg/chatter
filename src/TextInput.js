import {useState} from 'react'
import { AiOutlineUp } from "react-icons/ai";

function TextInput(props) {
  const [text, setText] = useState('')
  function sendMessage(){
    if(text==='') return
    props.send(text)
    setText('')
  }

function keyPressed(e){
  if(e.key==='Enter') {
    sendMessage()
  }
}

  return <footer className="text-input">
    <input 
      placeholder="Write your message"
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyPress={keyPressed}
    />
    <button onClick={sendMessage} disabled={!text} className="send-button">
      <AiOutlineUp title="send" 
        style={{minWidth:'0.9rem'}} 
      />
    </button>
  </footer>
}
export default TextInput