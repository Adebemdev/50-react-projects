import Card from '../components/Card';
import './Products.css';
const Products = ({ results }) => {
  return <section className="card-container ">{results}</section>;
};

export default Products;
