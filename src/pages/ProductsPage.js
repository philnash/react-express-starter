import Products from "../components/Products";
import ShoppingCart from "../components/ShoppingCart";

function ProductsPage() {
  return (
    <div className="component-main-div products-page">
      <h1>ProductsPage</h1>
      <Products />
      <div>
        <aside className="shopping-cart-aside">
          <ShoppingCart />
        </aside>
      </div>
    </div>
  );
}

export default ProductsPage;
