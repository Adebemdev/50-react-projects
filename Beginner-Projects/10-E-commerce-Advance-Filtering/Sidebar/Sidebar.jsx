import Category from '../../Beginner-Projects/10-E-commerce-Advance-Filtering/Sidebar/Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';

import './Sidebar.css';

const Sidebar = ({ handleSelectedChangeRadio }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category handleSelectedChangeRadio={handleSelectedChangeRadio} />
        <Price handleSelectedChangeRadio={handleSelectedChangeRadio} />
        <Colors handleSelectedChangeRadio={handleSelectedChangeRadio} />
      </section>
    </>
  );
};

export default Sidebar;
