import Products from '../components/Products'

function ProductsPage() {
    return (
      <main>
        <h1>ProductsPage</h1>
        {/* NOT MVP. I am having a hard time uploading the product image to the database so I would like to hard code the products image onto this page. We can still link it to the inventory / product table to update the number in stock */}
        <br/>
        <h2>Individually Wrapped Fire Starter</h2>
        <br />
        <img width='200' height='200'src='package.jpeg' alt="fire starter"/>
        <img width='200' height='200'src='ring.jpeg' alt="fire starter"/>
        <img width='200' height='200'src='ring2.jpeg' alt="fire starter"/>
      </main>
    );
  }
  
  export default ProductsPage;
  