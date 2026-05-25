import "./LandingPage.css";
import { useEffect } from "react";

function LandingPage() {

  useEffect(() => {

    if (
      document.getElementById(
        "google-translate-script"
      )
    ) {
      return;
    }

    window.googleTranslateElementInit = () => {

      if (
        window.google &&
        document.getElementById("google_translate")
      ) {

        document.getElementById(
          "google_translate"
        ).innerHTML = "";

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",

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

    const script =
      document.createElement("script");

    script.id =
      "google-translate-script";

    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    script.async = true;

    document.body.appendChild(script);

  }, []);


  return (

    <div className="landing">

      {/* Navbar */}

      <nav className="navbar">

        <h2 className="logo">
          BookNest
        </h2>

        <div className="nav-links">

          <a href="#">
            Home
          </a>

          <a href="#">
            Browse
          </a>

          <a href="#">
            Exchange
          </a>

          <a href="#">
            Login
          </a>

          <button
            className="signup-btn"
          >
            Sign Up
          </button>

        </div>

      </nav>


      {/* Hero */}

      <section className="hero">

        <div className="hero-left">

          <h1>

            Exchange, Buy &
            Discover Books

          </h1>

          <p>

            BookNest helps readers
            exchange books, buy
            affordable books,
            and connect with
            book lovers.

          </p>

          <div
            className="hero-buttons"
          >

            <button
              className="exchange-btn"
            >

              Exchange Books

            </button>

            <button
              className="browse-btn"
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


      {/* Features */}

      <section
        className="features"
      >

        <h2>

          Why BookNest?

        </h2>

        <div className="cards">

          <div className="card">

            📚

            <h3>

              Exchange Books

            </h3>

            <p>

              Swap books
              online.

            </p>

          </div>


          <div className="card">

            💰

            <h3>

              Buy Affordable Books

            </h3>

            <p>

              Save money.

            </p>

          </div>


          <div className="card">

            🌍

            <h3>

              Eco Friendly

            </h3>

            <p>

              Reuse books.

            </p>

          </div>

        </div>

      </section>


      {/* Translation */}

      <section
        className="translate-section"
      >

        <h2>

          Translate Website

        </h2>

        <div
          id="google_translate"
        >

        </div>

      </section>


      {/* Footer */}

      <footer>

        © 2026 BookNest

      </footer>

    </div>

  );

}

export default LandingPage;