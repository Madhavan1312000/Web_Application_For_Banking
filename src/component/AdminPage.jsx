import style from "../css/adminpage.module.css"
import { Link } from "react-router-dom"

const AdminPage=()=>{
    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div>
                        <Link to="/viewaccountholder">View Account Holders</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminPage