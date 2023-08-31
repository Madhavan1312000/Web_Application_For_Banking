import About from "./component/About"
import AccountHolder from "./component/AccountHolder"
import AccountHolderLogin from "./component/AccountHolderLogin"
import AccountHolderPage from "./component/AccountHolderPage"
import AccountHolderSignup from "./component/AccountHolderSignup"
import Admin from "./component/Admin"
import AdminLogin from "./component/AdminLogin"
import AdminPage from "./component/AdminPage"
import Home from "./component/Home"
import HomePage from "./component/HomePage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Transaction from "./component/Transaction"
import AdminSignup from "./component/AdminSignUp"
import ViewAccountHolder from "./component/ViewAccountHolders"
import ContactUs from "./component/ContactUs"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Home/>
            <Routes>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/accholder" element={<AccountHolder/>}></Route>
                <Route path="/contactus" element={<ContactUs/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/adminlogin" element={<AdminLogin/>}></Route>
                <Route path="/adminsignup" element={<AdminSignup/>}></Route>
                <Route path="/adminpage" element={<AdminPage/>}></Route>
                <Route path="/accountholder" element={<AccountHolder/>}></Route>
                <Route path="/accountholderlogin" element={<AccountHolderLogin/>}></Route>
                <Route path="/accountholdersignup" element={<AccountHolderSignup/>}></Route>
                <Route path="/accountholderpage" element={<AccountHolderPage/>}></Route>
                <Route path="/transaction/:index" element={<Transaction/>}></Route>
                <Route path="/viewaccountholder" element={<ViewAccountHolder/>}></Route>
            </Routes>
            <HomePage></HomePage>
            </BrowserRouter>
        </div>
    )
}
export default App