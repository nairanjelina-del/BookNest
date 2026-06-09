import "./Home.css"
import { useNavigate } from "react-router-dom"

function Home(){

const navigate=useNavigate();

return(

<div className="home-container">

<h1>

Welcome to BookHive 📚

</h1>

<p>

What would you like to do today?

</p>

<div className="home-cards">

<div
className="option-card"
onClick={()=>navigate("/browse")}
>

<h2>

📚 Browse Books

</h2>

<p>

Explore books shared by readers

</p>

</div>

<div
className="option-card"
onClick={()=>navigate("/exchange")}
>

<h2>

🔄 Exchange Books

</h2>

<p>

Share your books with others

</p>

</div>

</div>

</div>

)

}

export default Home;