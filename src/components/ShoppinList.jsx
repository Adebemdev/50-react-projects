import { useState } from 'react';

const ShoppinList = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (!name && !quantity) return;

    const newItems = {
      name,
      quantity: quantity,
    };

    setCart((prev) => [...prev, newItems]);
    setName('');
    setQuantity('');
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="quanttiy"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {cart.map((item) => (
          <ul key={Math.random()}>
            <li>
              Item's name {item.name} - Quantity: {item.quantity}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ShoppinList;
