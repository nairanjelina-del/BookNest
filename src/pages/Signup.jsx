import "./Signup.css"
import { useNavigate } from "react-router-dom"

function Signup(){
    const navigate=useNavigate();
    function login(){
    
    navigate('/Login');
    function move(){
        navigate('/Home')
    }

}

return(

<div className="signup-container">

<div className="signup-box">

<h2>Create Account</h2>

<p>
Join BookHive today 📚
</p>

<input
type="text"
placeholder="Full Name"
/>

<input
type="email"
placeholder="Email"
/>

<input
type="password"
placeholder="Password"
/>

<input
type="password"
placeholder="Confirm Password"
/>

<button onClick={move}> 

Sign Up

</button>

<p className="login-link">

Already have an account?
<span
onClick={login}
className="login-text">

Login

</span>

</p>

</div>

</div>

)

}

export default Signup