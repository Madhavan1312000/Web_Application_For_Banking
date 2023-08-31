import style from "../css/home.module.css"
import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <div>
            <div id={style.maindiv}>
                <div>
                    <div id={style.logo}>
                        <img src="" alt="" />
                    </div>
                    <div id={style.nav}>
                        <div><Link to="/contactus">Contact Us</Link></div>
                        <div><Link>About Us</Link></div>
                        <div><Link to="/homepage"><i class="fa-solid fa-house"></i></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home