import Products from "../components/Products";
import ShoppingCart from "../components/ShoppingCart";
import { configureStore } from "redux";

function ProductsPage() {
  return (
    <div className="component-main-div products-page">
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
