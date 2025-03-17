const Input = ({ handleSelectedChangeRadio, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleSelectedChangeRadio}
        type="radio"
        name={name}
        id=""
        value={value}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
