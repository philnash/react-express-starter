import Hero from "../components/Hero";
import ShoppingCart from "../components/ShoppingCart";
// import Navigation from "../components/Navbar.jsx";
// import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home">

      <main>
        <Hero />
        {/* Use the Hero component to style this area         */}
        <hr />
        <br />
      </main>
      <div>
        <br />
        <aside className="shoppingcartaside">
          <ShoppingCart />
        </aside>
      </div>
    </div>
  );
}

export default HomePage;
