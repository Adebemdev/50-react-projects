const products = [
  {
    id: 1,
    name: 'Phone',
    price: 1200,
  },
  {
    id: 2,
    name: 'Laptop',
    price: 1500,
  },
  {
    id: 3,
    name: 'SmartPhone',
    price: 1700,
  },
];

const ProductsList = () => {
  return (
    <div>
      {products.map(({ id, name, price }) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>${price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
