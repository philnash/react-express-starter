import { useState } from "react";

function ShoppingCart(){
  const [price, setPrice] = useState("$0.00");
  const addToCart = async (setPrice) => {
    setPrice.preventDefault()}

    return (
      <div className="shopping-cart" style={{backgroundcolor:"white"}}>
        <h2> ShoppingCart Component </h2>
        <img width="50" height="50" src="package.jpeg" alt="fire starter" />
        <button>+1</button>
        <button onClick={addToCart}>delete item</button>
        <p>Price = {price}</p>
      </div>
    );
  };
  
  export default ShoppingCart;
  