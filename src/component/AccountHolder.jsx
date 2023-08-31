import style from "../css/accountholder.module.css"
import { Link } from "react-router-dom"

const AccountHolder=()=>{
    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                <div>
                       <Link to="/accountholderlogin">LOGIN</Link>
                    </div>
                    <div>
                       <Link to="/accountholdersignup">SIGN UP</Link>  
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountHolder