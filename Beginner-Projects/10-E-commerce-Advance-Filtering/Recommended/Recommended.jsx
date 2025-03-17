import Button from '../components/Button';

import './Recommended.css';

const Recommended = ({ handleSelectedClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button
            onClickHandler={handleSelectedClick}
            title="All Products"
            value=""
          />
          <Button
            onClickHandler={handleSelectedClick}
            title="Nike"
            value="Nike"
          />
          <Button
            onClickHandler={handleSelectedClick}
            title="Adidas"
            value="Adidas"
          />
          <Button
            onClickHandler={handleSelectedClick}
            title="Puma"
            value="Puma"
          />
          <Button
            onClickHandler={handleSelectedClick}
            title="Vans"
            value="Vans"
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
