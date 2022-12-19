import { useState } from "react";
import { Container } from "react-bootstrap";

function ShoppingCart() {
  const [price, setPrice] = useState("$0.00");
  const addToCart = async (setPrice) => {
    setPrice.preventDefault();
  };

  return (
    <div className="shopping-cart">
      <Container>
        <h2> Shopping Cart</h2>
        <img width="50" height="50" src="package.jpeg" alt="fire starter" />
        <button>+1</button>
        <button onClick={addToCart}>delete item</button>
        <p>Price = {price}</p>
      </Container>
    </div>
  );
}

export default ShoppingCart;
