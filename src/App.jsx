import { useState } from 'react';
import products from '../Beginner-Projects/10-E-commerce-Advance-Filtering/db/data';
import Nav from '../Beginner-Projects/10-E-commerce-Advance-Filtering/Navigation/Nav';
import Products from '../Beginner-Projects/10-E-commerce-Advance-Filtering/Products/Products';
import Recommended from '../Beginner-Projects/10-E-commerce-Advance-Filtering/Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import './index.css';
import Card from '../Beginner-Projects/10-E-commerce-Advance-Filtering/components/Card';

console.log(products);

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  // -----Input FIltering-----

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // -----Radio FIltering-----

  const handleSelectedChangeRadio = (e) => {
    setSelectedCategory(e.target.value);
  };

  // -----Button FIltering-----

  const handleSelectedClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, newPrice, title, company, color }) =>
          category === selected ||
          newPrice === selected ||
          title === selected ||
          company === selected ||
          color === selected
      );
    }

    return filteredProducts.map(
      ({ title, newPrice, PrevPrice, img, star, reviews }) => (
        <Card
          key={Math.random()}
          newPrice={newPrice}
          img={img}
          star={star}
          reviews={reviews}
          PrevPrice={PrevPrice}
          title={title}
        />
      )
    );
  };

  const results = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleSelectedChangeRadio={handleSelectedChangeRadio} />
      <Nav query={query} handleQueryChange={handleQueryChange} />
      <Recommended handleSelectedClick={handleSelectedClick} />
      <Products results={results} />
    </>
  );
};

export default App;
