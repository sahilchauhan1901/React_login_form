import './UseRefDemo.css'
import {useRef, useState} from 'react'
function UseRefDemo(){
    const dataInput=useRef(null)
    const [UserInput,setUserInput]=useState(null);
    function submitHandler() {
        const data= dataInput.current.value
        setUserInput(data)
        console.log(data)
    }
    return(
        <div className='container'>
            <h1>UseRef Hook example</h1>
            <p>This is an demo component for useRef.</p>
            <input placeholder="Enter Something here" ref={dataInput}/>
            <button className="btn" onClick={submitHandler}>Submit Data</button>
            <p>{UserInput}</p>
        </div>
    )
}
export default UseRefDemo