// import { createContext } from "context";
// import { useState } from "react";

function Products() {
  const addToCart = async (event) => {
    event.preventDefault();
  };
  // const [quantitypurchased, setQuantityPurchased] = useState("");

  // const handleSubmit = (event) => {
    // event.preventDefault();
    // Send the form data to the server using an HTTP request
  // };

  return (
    <div className="component-main-div products-component">
      <h1> Products Component </h1>
      <h2 className="productName">THE 1 Firestarter</h2>
      <br />
      <h2 className="productTagline">Individually Wrapped Fire Starter</h2>
      <br />
      <div className="product-gallery">
        <div className="product-image">
          <img width="100" height="100" src="ring.jpeg" alt="fire starter" />
        </div>
        <div className="product-image">
          <img width="100" height="100" src="ring2.jpeg" alt="fire starter" />
        </div>
        <div className="product-image">
          <img width="300" height="300" src="package.jpeg" alt="fire starter" />
        </div>
        <p className="product-description">
          A recycled product made in Wisconsin. For Use in Campfires, Wood
          Stoves, Fireplaces. Lights Gradually. <b> Will not flare up. </b> No
          newspaper or kindling needed.{" "}
          <i>
            {" "}
            Directions: Place in bottom of fire, stack wood over ring and light.{" "}
          </i>
        </p>
      </div>
      <form>
         <label>Qty</label>
        <input
          type="number"
          name="quantitypurchased"
          placeholder="How many do you want?"
          onChange={(event) => {
            addToCart(event.target.value);
          }}
        />
        <button onSubmit={addToCart}>Add To Cart</button>
      </form>
    </div>
  );
}

export default Products;
