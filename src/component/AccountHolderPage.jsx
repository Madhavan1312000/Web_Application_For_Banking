import { useContext, useEffect, useState } from "react"
import style from "../css/accountholderpage.module.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { index1 } from "./AccountHolderLogin"

const AccountHolderPage=()=>{
    let id=useContext(index1)

    let[email,setEmail]=useState("")
    let[name,setName]=useState("")
    let[balance,setBalance]=useState("")
    let[password,setPassword]=useState("")
    let[accno,setAccno]=useState("")

    useEffect(()=>{
        // axios.get(`http://localhost:3000/accountholder/${id}`)
        axios.get(`http://localhost:3000/accountholder/2`)
        .then((r)=>{
            setName(r.data.name)
            setBalance(r.data.balance)
            setEmail(r.data.email)
            setPassword(r.data.password)
            setAccno(r.data.accno)
            console.log("Found")
        })
        .catch(()=>{
            console.log("No Datas Found")
            console.log(id)
        })
    },[2])

    let transaction=()=>{
        var type=prompt("Enter Whether Deposit or Withdraw")
        if(type==="Deposit"){
            var dep=prompt("Enter the amount to deposit")
            var a=parseInt(dep)
            var b=parseInt(balance)
            let total=a+b
            setBalance(total)
        }
        if(type==="Withdraw"){
            var dep=prompt("Enter the amount to Withdraw")
            var a=parseInt(dep)
            var b=parseInt(balance)
            let total=b-a
            setBalance(total)
        }
    }

    let completeTransaction=()=>{
        let payload={name,email,accno,password,balance}
        axios.put(`http://localhost:3000/accountholder/2`,payload)
        alert("Your Transaction Got Completed !!!!!")
    }

    return(
        <div>
                <div id={style.maindiv}>
                <div id={style.subdiv}>
                    {/* <div><Link to={`/transaction/2`}>TRANSACTION</Link></div> */}
                    <div id={style.d3}>
                        <label htmlFor="">Name</label>                : <input type="text" value={name}/><br />
                        <label htmlFor="">Email</label>               : <input type="text" value={email}/><br />
                        <label htmlFor="">Account Number</label>      : <input type="text" value={accno}/><br />
                        <label htmlFor="">Balance</label>             : <input type="text" value={balance}/><br />
                    </div>
                    <div id={style.d1}><button onClick={transaction}>TRANSACTION</button></div>
                    <div id={style.d2}><button onClick={completeTransaction}>Complete The Transaction</button></div>
                </div>
            </div>
        </div>
    )
}
export default AccountHolderPage