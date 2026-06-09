import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
return(
<nav className="navbar">

        <h2 className="logo">
          BookHive
        </h2>

        <div className="nav-links">
<Link to="/">
Home
</Link>





<Link to="/login">
Login
</Link>

<button
className="signup-btn"
onClick={() => navigate("/signup")}>
Sign Up
</button>
        </div>

      </nav>
)}
export default Navbar;







