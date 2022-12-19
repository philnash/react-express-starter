// import { createContext } from "context";
import { useState } from "react";
import { Card } from "react-bootstrap";

function Products() {
  const [quantitypurchased, setQuantityPurchased] = useState("");
  const addToCart = async (event) => {
    await event.preventDefault();
  };
  // const handleSubmit = (event) => {
  // event.preventDefault();
  // Send the form data to the server using an HTTP request
  // };

  return (
    <div>
      <Card className="product-card" style={{ width: "90%" }}>
        <Card.Header as="h5">Featured </Card.Header>
        <Card.Body>
          <Card.Title>THE 1 Firestarter</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Individually Wrapped Fire Starter
          </Card.Subtitle>
          <Card.Img className="card-image" src="/package.jpeg" />
          <Card.Text>
            A recycled product made in Wisconsin. For Use in Campfires, Wood Stoves, Fireplaces. Lights Gradually. <b> Will not flare up. </b> No newspaper or kindling needed. 
          </Card.Text>
            <br/>
            <p><i>Directions: Place in bottom of fire, stack wood over ring and light.
              </i></p>
              </Card.Body>
          <div className="product-gallery">
            <div className="product-image">
              <img src="ring.jpeg" alt="fire starter"/>
            </div>
            <div className="product-image">
              <img src="ring2.jpeg"alt="fire starter"/>
            </div>
            <div className="product-image">
              <img src="package.jpeg"alt="fire starter"/>
            </div>
          </div>
      <form>
        <p>$1.50 each</p>
        <label>Qty</label>
        <input
          type="number"
          name="quantitypurchased"
          value={quantitypurchased}
          placeholder="1, 2..."
          onChange={(event) => {
            addToCart(event.target.value);
          }}
          />
        <button onSubmit={addToCart}>Add To Cart</button>
      </form>
          <hr/>
          <Card.Link href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire.html">
            Click here to read more about fire safety from American Red Cross
          </Card.Link>
      </Card>
    </div>
  );
}

export default Products;
