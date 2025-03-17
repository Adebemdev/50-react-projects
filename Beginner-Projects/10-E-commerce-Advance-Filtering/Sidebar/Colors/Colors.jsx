import Input from '../../components/Input';
import './Colors.css';

const Colors = ({ handleSelectedChangeRadio }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleSelectedChangeRadio}
          type="radio"
          name="test1"
          value=""
        />
        <span className="checkmark all"></span>
        All
      </label>
      <Input
        handleSelectedChangeRadio={handleSelectedChangeRadio}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleSelectedChangeRadio={handleSelectedChangeRadio}
        value="blue"
        title="Blue"
        name="test1"
        color="Blue"
      />
      <Input
        handleSelectedChangeRadio={handleSelectedChangeRadio}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleSelectedChangeRadio={handleSelectedChangeRadio}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          onChange={handleSelectedChangeRadio}
          type="radio"
          name="test1"
          value="white"
        />
        <span
          className="checkmark"
          style={{ backgroundColor: 'white', border: '2px solid black' }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
