import { useState,useRef } from "react"
import './BillSplit.css'
function Billsplit(){
    const amountInput=useRef(0)
    const personsInput=useRef(0)
    const [splitBill,setSplitBill]=useState(0)
    function splitbillHandler(){
        const amountData=amountInput.current.value;
        const personsData=personsInput.current.value;
        let bill=(amountData/personsData).toFixed(2)
        setSplitBill(bill)
        console.log(amountData,personsData)
    }
    return(
        <div className="container">
            <h1>Bill Split Application Using React.js</h1>
        <p>This is a simple react app application to split bill between your friend.</p>
        <input placeholder="Enter the amount" ref={amountInput}/>
        <input placeholder="Enter the persons" ref={personsInput}/>
        <button className="btn" onClick={splitbillHandler}>Split Bill</button>
        <h3>{splitBill}</h3>
        </div>
    )
}
export default Billsplit