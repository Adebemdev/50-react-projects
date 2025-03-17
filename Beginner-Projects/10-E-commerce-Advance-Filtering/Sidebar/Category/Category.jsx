import Input from '../../components/Input';

import './Category.css';

const Category = ({ handleSelectedChangeRadio }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleSelectedChangeRadio}
            type="radio"
            name="test"
            value=""
          />
          <span className="checkmark"></span>
          All
        </label>
        <Input
          handleSelectedChangeRadio={handleSelectedChangeRadio}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleSelectedChangeRadio={handleSelectedChangeRadio}
          value="flats"
          name="test"
          title="Flats"
        />
        <Input
          handleSelectedChangeRadio={handleSelectedChangeRadio}
          value="sandals"
          name="test"
          title="Sandals"
        />
        <Input
          handleSelectedChangeRadio={handleSelectedChangeRadio}
          value="heels"
          name="test"
          title="Heels"
        />
      </div>
    </div>
  );
};

export default Category;
