const Product = ({ name, price }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Product;
