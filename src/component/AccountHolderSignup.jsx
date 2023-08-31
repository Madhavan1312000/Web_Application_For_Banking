import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import style from "../css/accountholdersignup.module.css"

const AccountHolderSignup=()=>{
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[accno,setAccno]=useState("")
    let[password,setPassword]=useState("")
    let[balance,setBalance]=useState("")

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let emailData=(e)=>{
        setEmail(e.target.value)
    }
    let accountnoData=(e)=>{
        setAccno(e.target.value)
    }
    let passwordData=(e)=>{
        setPassword(e.target.value)
    }
    let balanceData=(e)=>{
        setBalance(e.target.value)
    }

    let formHandle=()=>{
        let payload={name,email,accno,password,balance}
        axios.post("http://localhost:3000/accountholder",payload)
        navigate("/accountholder")
    }

    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div>
                    <table>
                        <tr>
                            <td><label htmlFor="">Name</label></td>
                            <td>: <input type="text" name="" id="" value={name} onChange={nameData}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Email</label></td>
                            <td>: <input type="text" name="" id="" value={email} onChange={emailData}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Account Number</label></td>
                            <td>: <input type="text" name="" id="" value={accno} onChange={accountnoData}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Password</label></td>
                            <td>: <input type="text" name="" id="" value={password} onChange={passwordData}/></td>
                        </tr>
                        <tr>
                        <td><label htmlFor="">Balance</label></td>
                        <td>: <input type="text" name="" id="" value={balance} onChange={balanceData}/></td>
                    </tr>
                    <tr aria-colspan={2}>
                       <td><button onClick={formHandle}>Sign Up</button></td>
                    </tr>
                    </table>            
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AccountHolderSignup