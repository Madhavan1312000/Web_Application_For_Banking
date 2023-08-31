import style from "../css/homepage.module.css"
import { Link } from "react-router-dom"
const HomePage=()=>{
    return(
        <div>
            <div id={style.home}>
                <div>
                <div><Link to="/admin">ADMIN</Link></div>
                <div><Link to="/accountholder">ACCOUNT HOLDER</Link></div>
                </div>
            </div>

        </div>
    )
}
export default HomePage