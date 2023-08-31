import { useEffect, useState } from "react"
// import data from "../data"
import style from "../css/contactus.module.css"
import { Link } from "react-router-dom"

const ContactUs=()=>{

    return(
        <div>
           <div id={style.maindiv3}>
           <Link to="/home"><i class="fa-sharp fa-solid fa-circle-xmark" id={style.x}></i></Link>
           <div id={style.m1}>
            <ol>
                <li><a href="https://www.whatsapp.com/" ><i class="fa-brands fa-square-whatsapp" id={style.i1}></i></a></li>
                <li><a href="https://mail.google.com/" ><i class="fa-solid fa-envelope" id={style.i2}></i></a></li>
                <li><a href="https://in.linkedin.com/" ><i class="fa-brands fa-linkedin" id={style.i3}></i></a></li>
                <li><a href="https://www.instagram.com/" ><i class="fa-brands fa-square-instagram" id={style.i4}></i></a></li>
            </ol>
           </div>
           </div>
        </div>
    )
}
export default ContactUs