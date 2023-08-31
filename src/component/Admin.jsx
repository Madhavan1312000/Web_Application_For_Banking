import style from "../css/admin.module.css"
import { Link } from "react-router-dom"


const Admin=()=>{
    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div>
                       <Link to="/adminlogin">LOGIN</Link>
                    </div>
                    <div>
                       <Link to="/adminsignup">SIGN UP</Link>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Admin