import { createContext, useEffect, useState } from "react"
import style from "../css/accountholderlogin.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import AccountHolderPage from "./AccountHolderPage"

let index1=createContext()

const AccountHolderLogin=()=>{

    let navigate=useNavigate()
// let[content,setContent]=useState([])
let[name,setName]=useState("")
let[email,setEmail]=useState("")
let[accno,setAccno]=useState("")
let[password,setPassword]=useState("")

let[id,setId]=useState("")

let idData=(e)=>{
    setId(e.target.value)
    // console.log(id)
}

let[accNo2,setAccNo2]=useState("")
let[password2,setPassword2]=useState("")

let accNo2Data=(e)=>{
    setAccNo2(e.target.value)
}
let password2Data=(e)=>{
    setPassword2(e.target.value)
}

useEffect(()=>{
    axios.get(`http://localhost:3000/accountholder/${id}`)
    .then((r)=>{
        setName(r.data.name)
        setEmail(r.data.email)
        setAccno(r.data.accno)
        setPassword(r.data.password)
    })
    .catch(()=>{
        console.log("No Datas Found")
    })
},[id])

let validation=()=>{
    if(accNo2==accno && password2==password){
        navigate("/accountholderpage")
    }
    else{
        alert("Invalid Account Number and Password")
    }
}

    return(
        <div>
            <index1.Provider value={id}>
                <AccountHolderPage/>
            </index1.Provider>

<div id={style.maindiv3}>
            
            <div id={style.m1}>
            <Link to="/home"><i class="fa-sharp fa-solid fa-circle-xmark" id={style.x}></i></Link>
            <div id={style.d1}>
                <div>
                <i>Enter Your Id : </i><input type="text" placeholder="id" value={id} onChange={idData}/>
                <br /><br />
                <br /><i class="fa-solid fa-user"></i><input type="text" placeholder="Account Number" value={accNo2} onChange={accNo2Data}/>
                <br /><br />
                <br /><i class="fa-solid fa-key" id={style.ii2}></i><input type="text" placeholder="Password" value={password2} onChange={password2Data}/><br /><br />
                {/* <br /><button><Link to="/accountholderpage">Login</Link></button> */}
                <br /><button onClick={validation}>Login</button>
                <br /><br />
                </div>
            </div>
            <div id={style.d2}>
                <img src="https://img.freepik.com/premium-vector/bank-building-white-background-bank-financing-money-exchange-financial-services_625536-430.jpg?size=626&ext=jpg&ga=GA1.1.1158682593.1687979719&semt=sph" alt="" />
            </div>
        </div>
        </div>
        </div>
    )
}
export default AccountHolderLogin
export {index1}