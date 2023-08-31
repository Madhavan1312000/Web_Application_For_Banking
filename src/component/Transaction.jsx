import { useParams } from "react-router"
import style from "../css/transaction.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Transaction=()=>{
let[balance,setBalance]=useState("")
let[name,setName]=useState("")
let[email,setEmail]=useState("")
let[accno,setAccno]=useState("")
let[password,setPassword]=useState("")

    let {index}=useParams

    useEffect(()=>{
        axios.get(`http://localhost:3000/accountholder/2`)
        .then((r)=>{
            setName(r.data.name)
        setEmail(r.data.email)
        setAccno(r.data.accno)
        setPassword(r.data.password)
            setBalance(r.data.balance)
        })
        .catch(()=>{
            console.log("No data found")
        })
    },[])

    var a = prompt("Enter The Amount To Deposit ")
    let depositProcess=()=>{
        var b=parseInt(balance)
        var a1=parseInt(a)
        // let b1=parseInt(b)
        setBalance(b+a1)
        console.log(balance)
        let payload={name,email,accno,password,balance}
        axios.put(`http://localhost:3000/accountholder/2`,payload)
    }

    return(
        <div>

            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div>
                        <button onClick={depositProcess}>Deposit</button>
                    </div>
                    <div>
                    <button>Withdraw</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Transaction