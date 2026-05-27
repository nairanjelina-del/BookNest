import "./LandingPage.css"
import { useEffect } from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Translation from "../components/Translation"
import Footer from "../components/Footer"


function LandingPage() {

useEffect(() => {

window.googleTranslateElementInit = () => {

if(
window.google &&
document.getElementById("google_translate")
){

new window.google.translate.TranslateElement(
{
pageLanguage:"en",

includedLanguages:
"en,hi,mr,ta,te,bn,gu,kn,ml",

layout:
window.google.translate
.TranslateElement
.InlineLayout.SIMPLE

},

"google_translate"

);

}

};

const script=document.createElement("script");

script.src=
"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

script.async=true;

document.body.appendChild(script);

},[]);

  return (

    <div className="landing">

      <Navbar />

      <Hero />

      <Features />

      <Translation />

      <Footer />

    </div>
    

  );

}

export default LandingPage;