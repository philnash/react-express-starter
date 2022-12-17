import Hero from "../components/Hero";
import ShoppingCart from "../components/ShoppingCart";
// import Navigation from "../components/Navbar.jsx";
// import Footer from "../components/Footer";

function HomePage() {
  return (
    <main>
      <div className="home">
        <h2>Welcome to Our Site!</h2>
        <h1 className="home__name">
          THE 1 <span class="home__name--last">Fire Starter</span>
        </h1>
        <h2>Light Up Your Life</h2>
        
        <hr/>
        <br/>
        <ShoppingCart />
      
      </div>
      <div>
        <br/>
        <aside>
          <Hero />
        </aside>
      </div>
    </main>
  );
}

export default HomePage;
