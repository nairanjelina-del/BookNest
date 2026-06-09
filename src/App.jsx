import LandingPage
from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup"

import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";

import BrowseBooks
from "./pages/BrowseBooks";

import ExchangeBooks
from "./pages/Exchange";
import Home from "./pages/Home"

function App() {

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<LandingPage/>}
/>

<Route
path="/browse"
element={<BrowseBooks/>}
/>

<Route
path="/exchange"
element={<ExchangeBooks/>}
/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/home" element={<Home/>}
/>
</Routes>

</BrowserRouter>

)

}

export default App;