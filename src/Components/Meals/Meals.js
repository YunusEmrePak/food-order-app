import React, { useState } from "react";
import Meal from "./Meal";

import classes from "./Meals.module.css";
import meals from "../../constants/Meals";

const Meals = (props) => {
  const [newMeal, setNewMeal] = useState(meals);

  return (
    <div className={classes["meals-container"]}>
      {newMeal.map((meal) => {
        return (
          <Meal
            id={meal.id}
            title={meal.mealName}
            information={meal.mealExp}
            price={meal.mealPrice}
            isAdded={meal.isAdded}
            key={meal.id}
            item={newMeal}
          />
        );
      })}
    </div>
  );
};

export default Meals;
