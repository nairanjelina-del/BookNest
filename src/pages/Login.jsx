import "./Login.css";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate=useNavigate();
function handleLogin(){
    navigate("/Home");

}    

return(

<div className="login-container">

<div className="login-box">

<h2>Login</h2>

<input
type="email"
placeholder="Enter Email"
/>

<input
type="password"
placeholder="Enter Password"
/>

<p className="forgot">
Forgot Password?
</p>

<button onClick={handleLogin}>
Login
</button>

</div>

</div>

)

}

export default Login;