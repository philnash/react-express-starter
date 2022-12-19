import { useState } from "react";
import { Container } from "react-bootstrap";

function ShoppingCart() {
  const [price, setPrice] = useState("$0.00");
  const addToCart = async (setPrice) => {
   await setPrice.preventDefault();
  };

  return (
    <div className="shopping-cart">
      <Container>
        <h2> Shopping Cart</h2>
        <div>
          <button className="delete-btn" alt="remove from cart">X</button>
          <p className="hide">delete</p>
        <img width="50" height="50" src="package.jpeg" alt="fire starter" />
          </div>
        <button onClick={addToCart}>Add to cart</button>
        <button className='checkout-button' href="/checkout">Checkout</button>
        <p>Price = {price}</p>
      </Container>
    </div>
  );
}

export default ShoppingCart;
