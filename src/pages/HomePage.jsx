import Hero from "../components/Hero";
import ShoppingCart from "../components/ShoppingCart";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <main>
      <div>
        <h1>HOME PAGE</h1>
        <hr/>
        <br/>
        <ShoppingCart />
        <Footer />
      </div>
      <div>
        <aside>
          <Hero />
        </aside>
      </div>
    </main>
  );
}

export default HomePage;
