import "./ExchangeBook.css";
import { useNavigate } from "react-router-dom";

function ExchangeBook(){


function SubmitBook(){
    alert("Book successfully Uploaded");
}
const navigate =useNavigate();
function returnBook(){
    navigate('/home')
}
return(

<div className="exchange-container">

<div className="exchange-box">

<h2>

Exchange Your Book 📚

</h2>

<input
placeholder="Book Title"
/>

<input
placeholder="Author Name"
/>

<input
placeholder="Genre"
/>

<input
placeholder="Condition (New/Used)"
/>



<textarea
placeholder=
"Book Description"
></textarea>

<input
placeholder=
"Preferred Exchange Book"
/>

<input
placeholder=
"Contact Email"
/>

<button onClick={SubmitBook}>

Submit Exchange

</button>
<button onClick={returnBook}>Back</button>

</div>

</div>

)

}

export default ExchangeBook;
