function ProductsPage() {
    return (
      <main>
        <h1>ProductsPage</h1>
        {/* NOT MVP. I am having a hard time uploading the product image to the database so I would like to hard code the products image onto this page. We can still link it to the inventory / product table to update the number in stock */}
        <br/>
        <h2>Placeholder Image</h2>
        <img width='200' height='200'src="https://images.unsplash.com/photo-1599679846806-78e4af93eab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80" alt="image of the 1 firestarter"/>
      </main>
    );
  }
  
  export default ProductsPage;
  