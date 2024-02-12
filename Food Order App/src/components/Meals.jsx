import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchmeals() {
      const response = await fetch("http://localhost:3000/meals");

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchmeals();
  }, []);

  return (
    <>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
};

export default Meals;
