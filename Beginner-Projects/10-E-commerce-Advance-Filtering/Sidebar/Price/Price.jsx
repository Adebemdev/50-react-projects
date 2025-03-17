import Input from '../../components/Input';
import './Price.css';
const Price = ({ handleSelectedChangeRadio }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input
          onChange={handleSelectedChangeRadio}
          type="radio"
          name="test2"
          value=""
        />
        <span className="checkmark"></span>
        All
      </label>
      <Input
        handleSelectedChangeRadio={handleSelectedChangeRadio}
        value={50}
        name="test2"
        title="$0 - 50"
      />
      <Input
        handleSelectedChangeRadio={handleSelectedChangeRadio}
        value={100}
        name="test2"
        title="$50 - 100"
      />
      <Input
        handleSelectedChangeRadio={handleSelectedChangeRadio}
        value={150}
        name="test2"
        title="$100 - 150"
      />
      <Input
        handleSelectedChangeRadio={handleSelectedChangeRadio}
        value={200}
        name="test2"
        title="Over $150"
      />
    </div>
  );
};

export default Price;
