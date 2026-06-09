import { useNavigate } from "react-router-dom";
import "./Hero.css"
function Hero() {

const navigate = useNavigate();

return (

<section className="hero">

<div className="hero-left">

<h1>
Exchange, Buy &
Discover Books
</h1>

<p>

BookHive helps readers exchange books,
buy affordable books, and connect
with book lovers.

</p>

<div className="search-box">

<input
type="text"
placeholder="Search books..."
/>

<button
onClick={() => navigate("/Login")}
>

Browse Books

</button>

</div>

</div>

<div className="hero-right">

<img

src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"

alt="Books"

/>

</div>

</section>

);

}

export default Hero;