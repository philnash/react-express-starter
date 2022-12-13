import Hero from "../components/Hero";
import ShoppingCart from "../components/ShoppingCart";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
    return (
      <main>
        <h1>HOME PAGE</h1>
        <Navigation />
        <Hero />
        <ShoppingCart />
        <Footer />
      </main>
    );
  }
  
  export default HomePage;
  