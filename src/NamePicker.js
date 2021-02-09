import {useState} from 'react'
import { AiFillEdit } from "react-icons/ai";

function NamePicker(){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState('')

    // Set or edit username
    if (showInput) {
        return <div className="name-picker">
            <input value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            <button onClick={()=>setShowInput(false)}>
                OK
            </button>
        </div>    
    }

    // Username has been set
    if (username) {
        return <div className="name-picker">
        <div>{username}</div>
        <button onClick={()=>setShowInput(true)}>
            <AiFillEdit title="edit" />
        </button>
    </div>
    }

    // Initial state, username has not been set
    return <div className="name-picker">
        <div>Set username</div>
        <button onClick={()=>setShowInput(true)}>
            <AiFillEdit title="edit" />
        </button>
    </div>

}

export default NamePicker