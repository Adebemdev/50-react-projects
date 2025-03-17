import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mealsList = meals.map(({ strMeals, strMealThumb, idMeal }) => {
    return (
      <section className="cards">
        <img src={strMealThumb} alt={strMeals} />
        <section className="content">
          <p>{strMeals}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="meals-container">{mealsList}</div>;
};

export default Meals;
