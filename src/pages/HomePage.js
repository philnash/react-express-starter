import Hero from "../components/Hero";
import ShoppingCart from "../components/ShoppingCart";

function HomePage() {
  return (
    <div className="home">
        <Hero />
      <div>
        <aside className="shoppingcartaside">
          <ShoppingCart />
        </aside>
      </div>
    </div>
  );
}

export default HomePage;