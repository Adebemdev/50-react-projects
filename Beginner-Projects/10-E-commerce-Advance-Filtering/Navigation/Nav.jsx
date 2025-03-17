import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

import './Nav.css';

const Nav = ({ query, handleQueryChange }) => {
  return (
    <nav>
      <div className="navigations-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
          value={query}
          onChange={handleQueryChange}
        />
      </div>

      <div className="profile-container">
        <a href="#" className="link">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#" className="link">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#" className="link">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
