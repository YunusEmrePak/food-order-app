import React from "react";
import Meal from "./Meal";

import classes from "./Meals.module.css";

const Meals = (props) => {
  const meals = [
    {
      id: 1,
      mealName: "Sushi",
      mealExp: "Finest fish and veggies",
      mealPrice: "22.99",
      total: 0,
      totalAmounth: 0
    },
    {
      id: 2,
      mealName: "Schnitzel",
      mealExp: "A german speciality",
      mealPrice: "16.50",
      total: 0,
      totalAmounth: 0
    },
    {
      id: 3,
      mealName: "Barbecue Burger",
      mealExp: "American, raw, meaty",
      mealPrice: "12.99",
      total: 0,
      totalAmounth: 0
    },
    {
      id: 4,
      mealName: "Green Bowl",
      mealExp: "Healthy...and gree...",
      mealPrice: "18.99",
      total: 0,
      totalAmounth: 0
    },
  ];

  return (
    <div className={classes["meals-container"]}>
      {meals.map((meal) => {
        return (
          <Meal
            title={meal.mealName}
            information={meal.mealExp}
            price={meal.mealPrice}
            key={meal.id}
          />
        );
      })}
    </div>
  );
};

export default Meals;
