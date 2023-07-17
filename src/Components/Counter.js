import React,{useState} from "react"
import './Counter.css'
function Hook(){
    const [count,setCount]= useState(0)
    
    function Increment(){
        setCount(count+1)
        // console.log(count)
    }
    function Decrement(){
        if(count>0)
        setCount(count-1)
        // console.log(count)
    }
    
    function reset(){
        setCount(0)
        // console.log(count)
    }
    
    
    return(
        <div className="container">
            <h1>React js Counter Application</h1>
            <h1 className="title">{count}</h1>
            <button className="btn" onClick={Increment}>Increment</button>
            <button className="btn" onClick={Decrement}>Decrement</button>
            <button className="btn" onClick={reset}>Reset</button>

        </div>
    )
}
export default Hook