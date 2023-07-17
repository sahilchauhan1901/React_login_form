import './UseRefDemo.css'
import {useRef, useState} from 'react'
function Firebasedemo(){
    const nameInput=useRef(null)
    const PasswordInput=useRef(null)
    const [submitStatus,setsubmitStatus]=useState(null);
    function submitStatusHandler(){
        setsubmitStatus(null)

    }
    function submitHandler() {
        const username= nameInput.current.value
        const password=PasswordInput.current.value
        let students={
            name:username,
            password:password,
        }
        // setUserInput(data)
        fetch('https://react-js-6aaa4-default-rtdb.firebaseio.com/students.json',{
            method:'post',
            body:JSON.stringify(students)
        }).then(()=>{
            setsubmitStatus('Thankyou for login!')
        })

        // console.log(data)
    }
    return(
        <div className='container'>
            <h1>Login to the Digital World</h1>
            <p>Dont worry we will never share your details with someone.</p>
            <input type='email' placeholder="Enter the usename" onFocus={submitStatusHandler} ref={nameInput}/>
            <input type='password' placeholder="Enter the Password" ref={PasswordInput}/>
            <button className="btn" onClick={submitHandler}>Submit</button>
            <h2>{submitStatus}</h2>
        </div>
    )
}
export default Firebasedemo