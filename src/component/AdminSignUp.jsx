import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import style from "../css/adminsignup.module.css"

const AdminSignup=()=>{
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let[phone,setPhone]=useState("")

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let emailData=(e)=>{
        setEmail(e.target.value)
    }
    let passwordData=(e)=>{
        setPassword(e.target.value)
    }
    let phoneData=(e)=>{
        setPhone(e.target.value)
    }

    let formHandle=()=>{
        let payload={name,email,password,phone}
        axios.post("http://localhost:3000/admin",payload)
        navigate("/adminlogin")
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
                            <td><label htmlFor="">Password</label></td>
                            <td>: <input type="text" name="" id="" value={password} onChange={passwordData}/></td>
                        </tr>
                        <tr>
                        <td><label htmlFor="">Phone Number</label></td>
                        <td>: <input type="text" name="" id="" value={phone} onChange={phoneData}/></td>
                    </tr>
                    <tr>
                       <td><button onClick={formHandle}>Sign Up</button></td>
                    </tr>
                    </table>            
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdminSignup