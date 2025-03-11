const product = {
  name: 'Laptop',
  price: 1200,
  availability: 'In stock',
};

const ProductInfo = () => {
  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h2>Price: ${product.price}</h2>
      <h3>Availability: {product.availability}</h3>
    </div>
  );
};

export default ProductInfo;
